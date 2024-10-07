import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'

import { Injectable }                           from '@nestjs/common'

import { TelegramClientPort }                   from '../ports/index.js'
import { ruLocale }                             from '../locals/index.js'

@Injectable()
export class ReceiveMessageUseCase {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  async process(ctx: TelegramBotFormattedContextType): Promise<void> {
    try {
      if (!this.telegramClient.checkChatConversation(ctx.chatId)) {
        const { entrypointAnswer } = ruLocale.receiveMessage
        await this.telegramClient.sendMessage(ctx, entrypointAnswer)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      const { serverErrorMessage } = ruLocale.appointmentConversation
      await this.telegramClient.sendMessage(ctx, serverErrorMessage)
    }
  }
}
