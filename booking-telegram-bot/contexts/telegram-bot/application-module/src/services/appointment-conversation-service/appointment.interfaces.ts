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

export type { AppointmentConversationDataType }
