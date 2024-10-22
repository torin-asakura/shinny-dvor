import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { TelegramClientPort }                   from '../ports/index.js'
import { I18nPort }                             from '../ports/index.js'

@Injectable()
export class ReceiveMessageUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly i18n: I18nPort
  ) {}

  async process(ctx: TelegramBotFormattedContextType): Promise<void> {
    try {
      if (!this.telegramClient.checkChatConversation(ctx.chatId)) {
        // TODO need markdown send
        await this.telegramClient.sendMessage(ctx, this.i18n.entrypoint)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      const errorMessage = this.i18n.appointmentConversationServerError
      await this.telegramClient.sendMessage(ctx, errorMessage)
    }
  }
}
