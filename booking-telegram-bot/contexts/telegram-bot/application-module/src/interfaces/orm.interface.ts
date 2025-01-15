type OrmAppointmentDataType = {
  telegramUserId?: bigint
  telegramFullName: string
  phone?: string
  timeSlotStart?: bigint
  timeSlotEnd?: bigint
  isApproved: boolean
  carBody: string
  radii: string
  service: string
  commentary: string | null
}

export type { OrmAppointmentDataType }
