import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { I18nPort }                             from '../ports/index.js'
import { TelegramClientPort }                   from '../ports/index.js'

@Injectable()
export class AppointmentConversationCatchErrorUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly i18n: I18nPort
  ) {}

  async process(ctx: TelegramBotFormattedContextType, error: Error): Promise<void> {
    // eslint-disable-next-line
    console.error(error)
    const serverErrorMessage = this.i18n.getAppointmentConversationServerError()
    await this.telegramClient.sendMessage(ctx, serverErrorMessage)
  }
}
