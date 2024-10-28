export class CheckBookingDataHelperError extends Error {
  constructor(message: string) {
    super(`Error on api-ifrastructure, check-booking-data-helper: ${message}`)
  }
}
