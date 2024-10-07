import type { CreateConversationReturnType }    from '@booking-telegram-bot/tgsnake-adapter'
import type { TelegramClientPort }              from '@telegram-bot/application-module'
import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'

import { Injectable }                           from '@nestjs/common'

import { TgsnakeAdapterService }                from '@booking-telegram-bot/tgsnake-adapter'

@Injectable()
export class TelegramClientPortImpl implements TelegramClientPort {
  constructor(private readonly telegramClient: TgsnakeAdapterService) {}

  async sendMessage(ctx: TelegramBotFormattedContextType, text: string): Promise<void> {
    return this.telegramClient.sendMessage(ctx, text)
  }

  async sendMessageWithMarkup(
    ctx: TelegramBotFormattedContextType,
    text: string,
    buttonsText: Array<string>
  ): Promise<void> {
    return this.telegramClient.sendMessageWithMarkup(ctx, text, buttonsText)
  }

  createConversation(ctx: TelegramBotFormattedContextType): CreateConversationReturnType {
    return this.telegramClient.createConversation(ctx)
  }

  removeConversation(chatId: bigint): void {
    this.telegramClient.removeConversation(chatId)
  }

  checkChatConversation(chatId: bigint): boolean {
    return this.telegramClient.checkChatConversation(chatId)
  }
}
