import type { TelegramClientPort } from '../ports/index.js'

type ConversationType = ReturnType<TelegramClientPort['createConversation']>

type AppointmentConversationDataType = AppointmentDataType & ConversationType

type AppointmentDataType = {
  service: string
  radii: string
  carBody: string
  timeSlot: TimeSlotType
  // selectedDate,
  commentary: boolean | string
}

type SelectedDateType = {
  milliseconds: number
  text: string
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

type TimeSlotType = {
  milliseconds: number
  text: string
  isFree: boolean
}

type TimeSlotsType = Array<TimeSlotType>

export type { AppointmentConversationDataType }
export type { WorkTimeDataType }
export type { TimeSlotType }
export type { TimeSlotsType }
export type { AppointmentDataType }
export type { SelectedDateType }
