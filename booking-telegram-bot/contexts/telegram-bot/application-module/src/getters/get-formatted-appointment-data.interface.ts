import type { OrmAppointmentDataType } from '@telegram-bot/application-module/interfaces'

type GetFormattedAppointmentDataType = (
  rawAppointmentData: {
    carBody: string
    radii: string
    service: string
    commentary: boolean | string
    timeSlot: {
      milliseconds: number
    }
  },
  telegramUserId: bigint,
  telegramFullName: string
) => OrmAppointmentDataType

export type { GetFormattedAppointmentDataType }
