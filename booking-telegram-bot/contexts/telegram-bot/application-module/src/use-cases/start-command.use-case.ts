import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { TelegramClientPort }                   from '../ports/index.js'
import { I18nPort }                             from '../ports/index.js'

@Injectable()
export class StartCommandUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly i18n: I18nPort
  ) {}

  async execute(ctx: TelegramBotFormattedContextType): Promise<void> {
    const welcomeMessage = this.i18n.welcome
    await this.telegramClient.sendMessage(ctx, welcomeMessage)
  }
}
