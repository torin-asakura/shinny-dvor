import type { CreateConversationReturnType }    from '@telegram-bot/application-module'
import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

export abstract class TelegramClientPort {
  abstract get ruLocale(): Record<string, string>

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
