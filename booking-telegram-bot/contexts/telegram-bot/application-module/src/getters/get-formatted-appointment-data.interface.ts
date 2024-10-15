import type { AppointmentDataType } from '@telegram-bot/application-module/interfaces'

type GetFormattedAppointmentDataType = (
  rawAppointmentData: Record<string, any>,
  telegramUserId: bigint,
  telegramFullName: string
) => AppointmentDataType

export type { GetFormattedAppointmentDataType }
