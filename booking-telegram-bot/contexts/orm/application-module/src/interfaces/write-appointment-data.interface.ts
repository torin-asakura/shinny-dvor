type AppointmentDataType = {
  id: number
  telegramUserId: bigint
  telegramFullName: string
  timeSlotStart: bigint
  timeSlotEnd: bigint
  isApproved: boolean
  carBody: string
  radii: string
  service: string
  commentary?: string
}

export type { AppointmentDataType }
