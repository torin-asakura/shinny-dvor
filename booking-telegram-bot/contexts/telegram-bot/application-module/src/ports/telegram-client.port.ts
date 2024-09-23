// TODO interfaces
export abstract class TelegramClientPort {
  abstract reply(ctx: any, text: string): any
  abstract sendMessage(ctx: any, text: string): any
  abstract createConversation(ctx: any): any
  abstract removeConversation(ctx: any): any
}
