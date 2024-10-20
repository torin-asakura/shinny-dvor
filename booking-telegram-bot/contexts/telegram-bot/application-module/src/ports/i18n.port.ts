export abstract class I18nPort {
  abstract getWelcome(): string

  abstract getHelp(): string

  abstract getCanceled(): string

  abstract getEntrypoint(): string
}
