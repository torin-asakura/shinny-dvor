import { Injectable }         from '@nestjs/common'

import { GET_CONTACTS }       from '@globals/data'
import { RunQueryUseCase }    from '@graphql-client/application-module'

import { TelegramClientPort } from '../../../ports/index.js'
import { ConversationPart }   from '../../conversation-part.class.js'
import { WORK_TIME }          from '../appointment-conversation.constants.js'
import { TIME_SLOT_STEP_MIN } from '../appointment-conversation.constants.js'
import { ruLocale }           from '../../../locals/index.js'

// TODO make free is false on прошедшие time slots
// TODO create conversationPart Class with createConversation method

@Injectable()
export class AppointmentGetTimeSlotConversationPart extends ConversationPart {
  // TODO types
  selectedDayWorkTime: any
  selectedDayDate: Date
  timeSlots: Array<{
    milliseconds: number
    text: string
    isFree: boolean
  }> = []
  reorderedTimeSlots: Array<Array<string>>
  selectedDayType: 'weekdays' | 'weekends'

  conversationPartName: string = 'timeSlot'

  // TODO to interfaces
  workTimeData: {
    weekdays: {
      start: number
      end: number
    }
    weekends: {
      start: number
      end: number
    }
  }

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly runQueryUseCase: RunQueryUseCase
  ) {
    super()
  }

  private async initWorkTimeData() {
    const workTimeData = await this.getWorktimeData()
    const workTimeRawString = this.getWorkTimeRawString(workTimeData)
    const parsedWorkTime = this.parseWorkTimeString(workTimeRawString)
    this.workTimeData = parsedWorkTime
  }

  private async getWorktimeData() {
    const queryData = await this.runQueryUseCase.execute(GET_CONTACTS)
    const workTimeData = queryData.data.contactItems.nodes
    return workTimeData
  }

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

      this.timeSlots.push({
        milliseconds: indexDateMilliseconds,
        text: indexDateText,
        isFree: indexDateFreeState,
      })
    }
  }

  private formatTimeSlots() {
    return this.timeSlots.map(({ text, isFree }) => {
      if (!isFree) return 'X'
      return text
    })
  }

  private reorderTimeSlots() {
    const formattedTimeSlots = this.formatTimeSlots()
    const reorderedTimeSlots = []

    // TODO to constants
    const innerArrayLength = 4

    for (let i = 0; i < formattedTimeSlots.length; i += innerArrayLength) {
      reorderedTimeSlots.push(formattedTimeSlots.slice(i, i + innerArrayLength))
    }

    this.reorderedTimeSlots = reorderedTimeSlots
  }

  private setDayType(selectedDayMs: number) {
    this.selectedDayDate = new Date(selectedDayMs)
    const selectedDay = this.selectedDayDate.getDay()
    if (selectedDay > 0 && selectedDay < 6) {
      this.selectedDayType = 'weekdays'
      return
    }
    this.selectedDayType = 'weekends'
    return
  }

  // TODO interfaces
  private setSelectedDayWorkTime() {
    this.selectedDayWorkTime = this.workTimeData[this.selectedDayType]
  }

  async sendQuestion(ctx, selectedDayMs: number) {
    const { cancelAppointmentButton, selectTimeSlotMessage } = ruLocale.appointmentConversation

    this.setDayType(selectedDayMs)

    // TODO filter closed intervals
    // TODO get now time and close intervast, котороые уже прошли

    // TODO init data
    await this.initWorkTimeData()
    this.setSelectedDayWorkTime()

    this.getTimeSlots()
    this.reorderTimeSlots()

    await this.telegramClient.sendMessageWithMarkup(ctx, selectTimeSlotMessage, [
      ...this.reorderedTimeSlots,
      cancelAppointmentButton,
    ])
  }

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
