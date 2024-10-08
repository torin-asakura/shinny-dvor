import type { CreateConversationReturnType }    from '@booking-telegram-bot/tgsnake-adapter'

import type { TelegramBotFormattedContextType } from './telegram-client.interfaces.js'

export abstract class TelegramClientPort {
  abstract sendMessage(ctx: TelegramBotFormattedContextType, text: string): Promise<void>

  abstract sendMessageWithMarkup(
    ctx: TelegramBotFormattedContextType,
    text: string,
    buttonsText: Array<string>
  ): Promise<void>

  abstract createConversation(ctx: TelegramBotFormattedContextType): CreateConversationReturnType

  abstract removeConversation(chatId: bigint): void

  abstract checkChatConversation(chatId: bigint): boolean
}
