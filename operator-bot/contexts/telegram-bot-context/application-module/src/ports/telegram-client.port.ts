export abstract class TelegramClientPort {
  // abstract sendMessage(ctx: TelegramBotFormattedContextType, text: string): Promise<void>

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  abstract sendMessage(ctx: any, text: string): Promise<void>

  abstract sendMessageToOperator(text: string): Promise<void>

  abstract editMessage(ctx: any, text: string): Promise<void>
}
