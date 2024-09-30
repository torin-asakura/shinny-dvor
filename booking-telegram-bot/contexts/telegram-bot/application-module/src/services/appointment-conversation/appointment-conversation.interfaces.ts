import { TelegramClientPort } from '../../ports/index.js'

type ConversationType = ReturnType<TelegramClientPort['createConversation']>

type AppointmentConversationDataType = ConversationType & {
  selectedDate: SelectedDateType
  selectedTimeSlot: SelectedTimeSlotType
  selectedCarBody: string
  selectedRadii: string
  selectedService: string
  commentary: string
}

type SelectedDateType = {
  milliseconds: number
  text: string
}

type SelectedTimeSlotType = {
  milliseconds: number
  text: string
  isFree: boolean
}

type WorkTimeDataType = {
  weekdays: {
    start: number
    end: number
  }
  weekends: {
    start: number
    end: number
  }
}

type TimeSlotsType = Array<{
  milliseconds: number
  text: string
  isFree: boolean
}>

export type { AppointmentConversationDataType }
export type { WorkTimeDataType }
export type { TimeSlotsType }
