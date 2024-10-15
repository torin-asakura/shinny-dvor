/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-destructuring */

import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import type { WorkTimeDataType }                from '../appointment-conversation.interfaces.js'
import type { TimeSlotsType }                   from '../appointment-conversation.interfaces.js'
import type { ParsedWorkTimeType }              from './appointment-conversation-part.get-time-slot.interfaces.js'

import { Injectable }                           from '@nestjs/common'

import { GetWorkTimeRawStringUseCase }          from '@query-client/application-module'
import { TIME_SLOT_KEYBOARD_ROW_MAX_ITEMS }     from '@telegram-bot/application-module/constants'
import { WORK_TIME }                            from '@telegram-bot/application-module/constants'
import { TIME_SLOT_STEP_MS }                    from '@telegram-bot/application-module/constants'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { ConversationQAPair }                   from '../../conversation-q-a-pair.class.js'
import { ruLocale }                             from '../../../locals/index.js'

@Injectable()
export class AppointmentGetTimeSlotConversationPart extends ConversationQAPair {
  conversationPartName: string = 'timeSlot'

  selectedDayWorkTime: {
    start: number
    end: number
  }

  keyboardVariants: Array<Array<string>>

  selectedDayDate: Date

  timeSlots: TimeSlotsType = []

  selectedDayType: 'weekdays' | 'weekends'

  workTimeData: WorkTimeDataType

  constructor(
    telegramClient: TelegramClientPort,
    private readonly getWorkTimeRawStringUseCase: GetWorkTimeRawStringUseCase
  ) {
    super(telegramClient)
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): TimeSlotsType[0] | boolean {
    const { messageText: responseText } = ctx

    const { missClickMessage } = ruLocale.appointmentConversation

    const findedTimeSlot = this.timeSlots.find(({ text }) => text === responseText)
    if (findedTimeSlot) {
      return findedTimeSlot
    }

    ctx.replyMessage(missClickMessage)
    return false
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType, selectedDayMs: number): Promise<void> {
    const { cancelAppointmentButton, selectTimeSlotMessage } = ruLocale.appointmentConversation

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

      // TODO нужна проверка по бд - свободный ли слот
      const indexDateFreeState = true

      timeSlots.push({
        milliseconds: indexDateMilliseconds,
        text: indexDateText,
        isFree: indexDateFreeState,
      })
    }

    return timeSlots
  }

  private getFormattedTimeSlots(timeSlots: TimeSlotsType): Array<string> {
    return timeSlots.map(({ text, isFree }) => {
      if (!isFree) return 'X'
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
    let dayType: string

    this.selectedDayDate = new Date(selectedDayMs)
    const selectedDay = this.selectedDayDate.getDay()

    if (selectedDay > 0 && selectedDay < 6) {
      dayType = 'weekdays'
    }
    dayType = 'weekends'

    return dayType
  }

  private getSelectedDayWorkTime(): { end: number; start: number } {
    return this.workTimeData[this.selectedDayType]
  }

  private async initData(selectedDayMs: number): Promise<void> {
    this.selectedDayType = this.getDayType(selectedDayMs) as typeof this.selectedDayType

    // TODO filter closed today intervals, in past time

    this.workTimeData = await this.getWorkTimeData()
    this.selectedDayWorkTime = this.getSelectedDayWorkTime()

    this.timeSlots = this.getTimeSlots()
    const timeSlotes_formatted = this.getFormattedTimeSlots(this.timeSlots)
    const timeSlots_reordered = this.getReorderedTimeSlots(timeSlotes_formatted)
    this.keyboardVariants = timeSlots_reordered
  }
}
