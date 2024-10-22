import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { I18nPort }                             from '../ports/index.js'
import { TelegramClientPort }                   from '../ports/index.js'

@Injectable()
export class AppointmentConversationSendEndMessageUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly i18n: I18nPort
  ) {}

  async process(ctx: TelegramBotFormattedContextType): Promise<void> {
    // TODO подставить usename бота оператора
    const endConversatoinMessage = this.i18n.appointmentConversationEndConversation

    await this.telegramClient.sendMessage(ctx, endConversatoinMessage)
  }
}
