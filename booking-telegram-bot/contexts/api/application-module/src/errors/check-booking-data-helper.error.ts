export class CheckBookingDataHelperError extends Error {
  constructor(message: string) {
    super(`Error on api-application, check-booking-data-helper: ${message}`)
  }
}
