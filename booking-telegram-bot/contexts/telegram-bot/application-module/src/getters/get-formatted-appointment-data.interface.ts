import type { OrmAppointmentDataType } from '@telegram-bot/application-module/interfaces'

type GetFormattedAppointmentDataType = (
  rawAppointmentData: Record<string, any>,
  telegramUserId: bigint,
  telegramFullName: string
) => OrmAppointmentDataType

export type { GetFormattedAppointmentDataType }
