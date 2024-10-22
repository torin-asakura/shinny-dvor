import type { CreateConversationReturnType }    from '../interfaces/index.js'
import type { TelegramBotFormattedContextType } from '../interfaces/index.js'

export abstract class TelegramClientPort {
  abstract sendMessage(ctx: TelegramBotFormattedContextType, text: string): Promise<void>

  abstract sendMessageWithMarkup(
    ctx: TelegramBotFormattedContextType,
    text: string,
    buttonsText: Array<string>
  ): Promise<void>

  abstract replyMessage(ctx: TelegramBotFormattedContextType, text: string): Promise<void>

  abstract createConversation(ctx: TelegramBotFormattedContextType): CreateConversationReturnType

  abstract removeConversation(chatId: bigint): void

  abstract checkChatConversation(chatId: bigint): boolean
}
