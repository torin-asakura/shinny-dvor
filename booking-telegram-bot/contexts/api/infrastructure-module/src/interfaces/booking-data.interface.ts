type BookingDataType = {
  telegramFullName: string
  phone: string
  carBody: string
  isApproved: boolean
  radii: string
  service: string
  commentary: string
}

type BookingDataKeyType = keyof BookingDataType

export type { BookingDataType }
export type { BookingDataKeyType }
