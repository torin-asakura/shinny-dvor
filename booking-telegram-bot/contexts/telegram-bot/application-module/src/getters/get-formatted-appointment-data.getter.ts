import type { GetFormattedAppointmentDataType } from './get-formatted-appointment-data.interface.js'

import { TIME_SLOT_STEP_MS }                    from '../constants/index.js'

const getFormattedAppointmentData: GetFormattedAppointmentDataType = (
  rawAppointmentData,
  telegramUserId,
  telegramFullName
) => {
  const { carBody, radii, service, commentary } = rawAppointmentData
  const timeSlotStart = BigInt(rawAppointmentData.timeSlot.milliseconds)
  const timeSlotEnd = BigInt(Number(rawAppointmentData.timeSlot.milliseconds) + TIME_SLOT_STEP_MS)

  return {
    telegramUserId,
    telegramFullName,
    timeSlotStart,
    timeSlotEnd,
    carBody,
    radii,
    isApproved: false,
    service,
    commentary: typeof commentary === 'string' ? commentary : null,
  }
}
export { getFormattedAppointmentData }
