export class GetAppointmentsUseCaseError extends Error {
  constructor(message: string) {
    super(`Error on api-application, get-appointment-use-case: ${message}`)
  }
}
