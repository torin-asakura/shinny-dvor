// TODO interfaces
export abstract class TelegramClientPort {
  abstract reply(ctx: any, text: string): any
  abstract sendMessage(ctx: any, text: string): any
  abstract sendMessageWithMarkup(ctx: any, text: string, buttonsText: Array<string>): any
  abstract createConversation(ctx: any): any
  abstract removeConversation(ctx: any): any
}
