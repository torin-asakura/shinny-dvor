/* eslint-disable @typescript-eslint/naming-convention */
import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { TelegramClientPort }                   from '../ports/index.js'

@Injectable()
export class ReceiveMessageUseCase {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  async process(ctx: TelegramBotFormattedContextType): Promise<void> {
    try {
      if (!this.telegramClient.checkChatConversation(ctx.chatId)) {
        const { receiveMessage_entrypointAnswer } = this.telegramClient.ruLocale
        await this.telegramClient.sendMessage(ctx, receiveMessage_entrypointAnswer)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      const { appointmentConversation_serverErrorMessage } = this.telegramClient.ruLocale
      await this.telegramClient.sendMessage(ctx, appointmentConversation_serverErrorMessage)
    }
  }
}
