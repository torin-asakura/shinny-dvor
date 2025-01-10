import type { OrmAppointmentDataType } from '@telegram-bot/application-module/interfaces'

type GetFormattedAppointmentDataType = (
  rawAppointmentData: object,
  telegramUserId: bigint,
  telegramFullName: string
) => OrmAppointmentDataType

export type { GetFormattedAppointmentDataType }
