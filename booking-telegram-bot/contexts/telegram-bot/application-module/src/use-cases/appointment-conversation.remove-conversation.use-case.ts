import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { TelegramClientPort }                   from '../ports/index.js'

@Injectable()
export class AppointmentConversationRemoveConversationUseCase {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  process(ctx: TelegramBotFormattedContextType): void {
    this.telegramClient.removeConversation(ctx.chatId)
  }
}
