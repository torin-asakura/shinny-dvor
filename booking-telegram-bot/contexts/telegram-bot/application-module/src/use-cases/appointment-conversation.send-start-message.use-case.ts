import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { I18nPort }                             from '../ports/index.js'
import { TelegramClientPort }                   from '../ports/index.js'

@Injectable()
export class AppointmentConversationSendStartMessageUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly i18n: I18nPort
  ) {}

  async process(ctx: TelegramBotFormattedContextType): Promise<void> {
    const startConversationMessage = this.i18n.appointmentConversationStartConversation
    await this.telegramClient.sendMessage(ctx, startConversationMessage)
  }
}
