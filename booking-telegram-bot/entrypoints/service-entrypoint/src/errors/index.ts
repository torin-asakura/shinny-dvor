export class CheckEnvsError extends Error {
  constructor(envName: string) {
    super(
      `Error on booking-telegram-bot, entrypoint, check-envs-helper: need to provide ${envName}`
    )
  }
}
