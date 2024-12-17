type OrmAppointmentDataType = {
  telegramUserId?: bigint | null
  telegramFullName: string
  phone?: string | null
  timeSlotStart?: bigint | null
  timeSlotEnd?: bigint | null
  isApproved: boolean
  carBody: string
  radii: string
  service: string
  commentary?: string | null
}

export type { OrmAppointmentDataType }
