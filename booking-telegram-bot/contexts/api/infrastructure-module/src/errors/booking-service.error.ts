export class BookingServiceError extends Error {
  constructor(message: string) {
    super(`Error on api-ifrastructure, booking-service: ${message}`)
  }
}
