type AppointmentDataType = {
  date: { clientText: string; milliseconds: number }
  timeSlot: { milliseconds: number; text: string; isFree: boolean }
  carBody: string
  radii: string
  service: string
  commentary: string
}

export type { AppointmentDataType }
