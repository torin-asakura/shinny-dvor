import type { WorkTimeDataType }            from '../appointment-conversation.interfaces.js'
import type { TimeSlotsType }               from '../appointment-conversation.interfaces.js'

import { Injectable }                       from '@nestjs/common'

import { GET_CONTACTS }                     from '@globals/data'
import { RunQueryUseCase }                  from '@graphql-client/application-module'

import { TelegramClientPort }               from '../../../ports/index.js'
import { ConversationPart }                 from '../../conversation-part.class.js'
import { TIME_SLOT_KEYBOARD_ROW_MAX_ITEMS } from '../appointment-conversation.constants.js'
import { WORK_TIME }                        from '../appointment-conversation.constants.js'
import { TIME_SLOT_STEP_MIN }               from '../appointment-conversation.constants.js'
import { ruLocale }                         from '../../../locals/index.js'

@Injectable()
export class AppointmentGetTimeSlotConversationPart extends ConversationPart {
  conversationPartName: string = 'timeSlot'

  // @ts-expect-error any
  selectedDayWorkTime
  // @ts-expect-error any
  keyboardVariants
  selectedDayDate: Date
  timeSlots: TimeSlotsType = []
  selectedDayType: 'weekdays' | 'weekends'
  workTimeData: WorkTimeDataType

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly runQueryUseCase: RunQueryUseCase
  ) {
    // @ts-expect-error arguments
    super()
  }

  private async getWorkTimeData() {
    const workTimeData = await this.getWorkTimeQueryData()
    const workTimeRawString = this.getWorkTimeRawString(workTimeData)
    const parsedWorkTime = this.parseWorkTimeString(workTimeRawString)
    return parsedWorkTime
  }

  private async getWorkTimeQueryData() {
    const queryData = await this.runQueryUseCase.execute(GET_CONTACTS)
    const workTimeData = queryData.data.contactItems.nodes
    return workTimeData
  }

  // @ts-expect-error any
  private getWorkTimeRawString(workTimeData) {
    return workTimeData[0].contactAddons.workinghours
  }

  private parseWorkTimeString(workTimeRawString: string) {
    let workTime = WORK_TIME

    try {
      const workTimeRawStringsArray = workTimeRawString.split('|n|')

      const workTimeHoursArray = workTimeRawStringsArray.map((workTimeRawStringsArrayItem) => {
        const workTimeStringsArray = workTimeRawStringsArrayItem.split(', ').at(-1)?.split(' - ')
        const workTimeHoursArray = workTimeStringsArray?.map((workTimeStringsArray) =>
          Number(workTimeStringsArray.split(':')[0]))
        return workTimeHoursArray
      })

      if (!workTimeHoursArray.length) throw new Error('parse time error')
      if (!workTimeHoursArray[0]?.length) throw new Error('parse time error')
      if (!workTimeHoursArray[1]?.length) throw new Error('parse time error')

      workTime.weekdays.start = workTimeHoursArray[0][0]
      workTime.weekdays.end = workTimeHoursArray[0][1]
      workTime.weekends.start = workTimeHoursArray[1][0]
      workTime.weekends.end = workTimeHoursArray[1][1]
    } catch (error) {
      console.error(error)
    } finally {
      return workTime
    }
  }

  private getTimeSlots() {
    let timeSlots = []
    const { start, end } = this.selectedDayWorkTime
    const startWorkTimeDate = this.selectedDayDate.setHours(start)
    const endWorkTimeDate = this.selectedDayDate.setHours(end)

    const step = 1000 * 60 * TIME_SLOT_STEP_MIN

    for (
      let indexDateMilliseconds = startWorkTimeDate;
      indexDateMilliseconds < endWorkTimeDate;
      indexDateMilliseconds += step
    ) {
      const getPadString = (number: number) => number.toString().padStart(2, 0)

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

  // @ts-expect-error any
  private getFormattedTimeSlots(timeSlots) {
    // @ts-expect-error any
    return timeSlots.map(({ text, isFree }) => {
      if (!isFree) return 'X'
      return text
    })
  }

  // @ts-expect-error any
  private getReorderedTimeSlots(timeSlots) {
    const reorderedTimeSlots = []

    const innerArrayLength = TIME_SLOT_KEYBOARD_ROW_MAX_ITEMS

    for (let i = 0; i < timeSlots.length; i += innerArrayLength) {
      reorderedTimeSlots.push(timeSlots.slice(i, i + innerArrayLength))
    }

    return reorderedTimeSlots
  }

  private getDayType(selectedDayMs: number) {
    let dayType: string

    this.selectedDayDate = new Date(selectedDayMs)
    const selectedDay = this.selectedDayDate.getDay()

    if (selectedDay > 0 && selectedDay < 6) {
      dayType = 'weekdays'
    }
    dayType = 'weekends'

    return dayType
  }

  private getSelectedDayWorkTime() {
    return this.workTimeData[this.selectedDayType]
  }

  private async initData(selectedDayMs: number) {
    // @ts-expect-error not assignable
    this.selectedDayType = this.getDayType(selectedDayMs)

    // TODO filter closed today intervals, in past time

    this.workTimeData = await this.getWorkTimeData()
    this.selectedDayWorkTime = this.getSelectedDayWorkTime()

    this.timeSlots = this.getTimeSlots()
    const timeSlotes_formatted = this.getFormattedTimeSlots(this.timeSlots)
    const timeSlots_reordered = this.getReorderedTimeSlots(timeSlotes_formatted)
    this.keyboardVariants = timeSlots_reordered
  }

  // @ts-expect-error not assignable
  async sendQuestion(ctx, selectedDayMs: number) {
    const { cancelAppointmentButton, selectTimeSlotMessage } = ruLocale.appointmentConversation

    await this.initData(selectedDayMs)

    await this.telegramClient.sendMessageWithMarkup(ctx, selectTimeSlotMessage, [
      ...this.keyboardVariants,
      cancelAppointmentButton,
    ])
  }

  // @ts-expect-error not assignable
  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    const { missClickMessage } = ruLocale.appointmentConversation

    const findedTimeSlot = this.timeSlots.find(({ text }) => text === responseText)
    if (findedTimeSlot) {
      return findedTimeSlot
    }

    message.reply(missClickMessage)
    return false
  }
}
