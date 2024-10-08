import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { TelegramClientPort }                   from '../ports/index.js'

@Injectable()
export class StartCommand {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  async execute(ctx: TelegramBotFormattedContextType): Promise<void> {
    await this.telegramClient.sendMessage(ctx, 'welcome message')
  }
}
