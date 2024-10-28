export class CheckFormattedContextHelperError extends Error {
  constructor(message: string) {
    super(`Error on tgsnake-adapter, check-formatted-context-helper: ${message}`)
  }
}
