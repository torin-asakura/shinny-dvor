export class BookingServiceError extends Error {
  constructor(message: string) {
    super(`Error on api-application, write-booking-data-use-case: ${message}`)
  }
}
