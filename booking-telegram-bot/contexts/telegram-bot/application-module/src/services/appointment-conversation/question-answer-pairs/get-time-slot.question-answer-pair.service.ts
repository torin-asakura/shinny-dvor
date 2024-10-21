/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-destructuring */

import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'
import type { WorkTimeDataType }                from '@telegram-bot/application-module'
import type { TimeSlotsType }                   from '@telegram-bot/application-module'

import type { ParsedWorkTimeType }              from './get-time-slot.question-answer-pair.interfaces.js'

import { Injectable }                           from '@nestjs/common'

import { GetWorkTimeRawStringUseCase }          from '@query-client/application-module'
import { CLOSED_TIME_SLOT_TEXT }                from '@telegram-bot/application-module/constants'
import { TIME_SLOT_KEYBOARD_ROW_MAX_ITEMS }     from '@telegram-bot/application-module/constants'
import { WORK_TIME }                            from '@telegram-bot/application-module/constants'
import { TIME_SLOT_STEP_MS }                    from '@telegram-bot/application-module/constants'
import { QuestionAnswerPairAbstractClass }      from '@telegram-bot/application-module/interfaces'

import { OrmPort }                              from '../../../ports/index.js'
import { TelegramClientPort }                   from '../../../ports/index.js'
import { I18nPort }                             from '../../../ports/index.js'

@Injectable()
class GetTimeSlotQuestionAnswerPart extends QuestionAnswerPairAbstractClass {
  questionAnswerPairName: string = 'timeSlot'

  selectedDayWorkTime: {
    start: number
    end: number
  }

  keyboardVariants: Array<Array<string>>

  selectedDayDate: Date

  timeSlots: TimeSlotsType = []

  selectedDayType: 'weekdays' | 'weekends'

  workTimeData: WorkTimeDataType

  selectedDayClosedTimeSlots: Array<[number, number]>

  constructor(
    telegramClient: TelegramClientPort,
    private readonly getWorkTimeRawStringUseCase: GetWorkTimeRawStringUseCase,
    i18n: I18nPort,
    private readonly orm: OrmPort
  ) {
    super(telegramClient, i18n)
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): TimeSlotsType[0] | boolean {
    const { messageText: responseText } = ctx

    if (responseText === CLOSED_TIME_SLOT_TEXT) {
      const closedTimeSlotMessage = this.i18n.getAppointmentConversationClosedTimeSlotMessage()
      this.telegramClient.replyMessage(ctx, closedTimeSlotMessage)
      return false
    }

    const findedTimeSlot = this.timeSlots.find(({ text }) => text === responseText)
    if (findedTimeSlot) {
      return findedTimeSlot
    }

    const missClickMessage = this.i18n.getAppointmentConversationMissClick()
    this.telegramClient.replyMessage(ctx, missClickMessage)
    return false
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType, selectedDayMs: number): Promise<void> {
    const cancelAppointmentButton = this.i18n.getAppointmentConversationCancelAppointmentButton()
    const selectTimeSlotMessage = this.i18n.getAppointmentConversationSelectTimeSlotMessage()

    await this.initData(selectedDayMs)

    await this.telegramClient.sendMessageWithMarkup(ctx, selectTimeSlotMessage, [
      ...this.keyboardVariants,
      cancelAppointmentButton,
    ] as Array<string>)
  }

  private async getWorkTimeData(): Promise<ParsedWorkTimeType> {
    const workTimeRawString = await this.getWorkTimeRawStringUseCase.execute()
    const parsedWorkTime = this.parseWorkTimeString(workTimeRawString)
    return parsedWorkTime
  }

  private parseWorkTimeString(workTimeRawString: string): ParsedWorkTimeType {
    const workTime = WORK_TIME

    try {
      const workTimeRawStringsArray = workTimeRawString.split('|n|')

      const workTimeHoursArray = workTimeRawStringsArray.map((workTimeRawStringsArrayItem) => {
        const workTimeStringsArray = workTimeRawStringsArrayItem.split(', ').at(-1)?.split(' - ')
        const workTimeHoursInnerArray = workTimeStringsArray?.map((workTimeStringsInnerArray) =>
          Number(workTimeStringsInnerArray.split(':')[0]))
        return workTimeHoursInnerArray
      })

      if (!workTimeHoursArray.length) throw new Error('parse time error')
      if (!workTimeHoursArray[0]?.length) throw new Error('parse time error')
      if (!workTimeHoursArray[1]?.length) throw new Error('parse time error')

      workTime.weekdays.start = workTimeHoursArray[0][0]
      workTime.weekdays.end = workTimeHoursArray[0][1]
      workTime.weekends.start = workTimeHoursArray[1][0]
      workTime.weekends.end = workTimeHoursArray[1][1]
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return workTime
    }
  }

  private getTimeSlots(): TimeSlotsType {
    const timeSlots = []
    const { start, end } = this.selectedDayWorkTime
    const startWorkTimeDate = this.selectedDayDate.setHours(start)
    const endWorkTimeDate = this.selectedDayDate.setHours(end)

    const step = TIME_SLOT_STEP_MS

    for (
      let indexDateMilliseconds = startWorkTimeDate;
      indexDateMilliseconds < endWorkTimeDate;
      indexDateMilliseconds += step
    ) {
      const getPadString = (number: number): string => number.toString().padStart(2, '0')

      const indexDate = new Date(indexDateMilliseconds)
      const indexDateHours = getPadString(indexDate.getHours())
      const indexDateMinutes = getPadString(indexDate.getMinutes())
      const indexDateText = `${indexDateHours}:${indexDateMinutes}`

      const isTimeSlogFree = this.checkTimeSlotFree(indexDateMilliseconds)

      timeSlots.push({
        milliseconds: indexDateMilliseconds,
        text: indexDateText,
        isFree: isTimeSlogFree,
      })
    }

    return timeSlots
  }

  private checkTimeSlotFree = (dateMs: number): boolean => {
    const dateNow = Date.now()
    const indexDateFreeState = dateMs > dateNow

    const isIndexTimeSlotInClosedInterval = this.selectedDayClosedTimeSlots.find((timeSlot) => {
      if (dateMs >= timeSlot[0] && dateMs < timeSlot[1]) {
        return true
      }
      return false
    })

    return Boolean(indexDateFreeState && !isIndexTimeSlotInClosedInterval)
  }

  private getFormattedTimeSlots(timeSlots: TimeSlotsType): Array<string> {
    return timeSlots.map(({ text, isFree }) => {
      if (!isFree) return CLOSED_TIME_SLOT_TEXT
      return text
    })
  }

  private getReorderedTimeSlots(timeSlots: Array<string>): Array<Array<string>> {
    const reorderedTimeSlots = []

    const innerArrayLength = TIME_SLOT_KEYBOARD_ROW_MAX_ITEMS

    for (let i = 0; i < timeSlots.length; i += innerArrayLength) {
      reorderedTimeSlots.push(timeSlots.slice(i, i + innerArrayLength))
    }

    return reorderedTimeSlots
  }

  private getDayType(selectedDayMs: number): string {
    this.selectedDayDate = new Date(selectedDayMs)
    const selectedDay = this.selectedDayDate.getDay()

    if (selectedDay > 0 && selectedDay < 6) {
      return 'weekdays'
    }

    return 'weekends'
  }

  private getSelectedDayWorkTime(): { end: number; start: number } {
    return this.workTimeData[this.selectedDayType]
  }

  private async getSelectedDaySlosedTimeSlots(
    selectedDayMs: number
  ): Promise<Array<[number, number]>> {
    const appointmentsData = await this.orm.getAppointmenstByDay(selectedDayMs)
    return appointmentsData
  }

  private async initData(selectedDayMs: number): Promise<void> {
    this.selectedDayClosedTimeSlots = await this.getSelectedDaySlosedTimeSlots(selectedDayMs)

    this.selectedDayType = this.getDayType(selectedDayMs) as typeof this.selectedDayType

    this.workTimeData = await this.getWorkTimeData()
    this.selectedDayWorkTime = this.getSelectedDayWorkTime()

    this.timeSlots = this.getTimeSlots()
    const timeSlotes_formatted = this.getFormattedTimeSlots(this.timeSlots)
    const timeSlots_reordered = this.getReorderedTimeSlots(timeSlotes_formatted)
    this.keyboardVariants = timeSlots_reordered
  }
}

export { GetTimeSlotQuestionAnswerPart }
