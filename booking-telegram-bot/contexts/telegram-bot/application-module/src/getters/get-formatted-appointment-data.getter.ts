import type { GetFormattedAppointmentDataType } from './get-formatted-appointment-data.interface.js'

import { TIME_SLOT_STEP_MS }                    from '@telegram-bot/application-module/constants'

const getFormattedAppointmentData: GetFormattedAppointmentDataType = (
  rawAppointmentData,
  telegramUserId,
  telegramFullName
) => {
  const { carBody, radii, service, commentary } = rawAppointmentData
  const timeSlotStart = BigInt(rawAppointmentData.timeSlot.milliseconds as number)
  const timeSlotEnd = BigInt(Number(rawAppointmentData.timeSlot.milliseconds) + TIME_SLOT_STEP_MS)

  return {
    telegramUserId,
    telegramFullName,
    timeSlotStart,
    timeSlotEnd,
    carBody,
    radii,
    service,
    commentary,
  }
}
export { getFormattedAppointmentData }
