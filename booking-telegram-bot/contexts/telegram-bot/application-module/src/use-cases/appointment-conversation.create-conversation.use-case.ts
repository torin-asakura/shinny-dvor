import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'
import type { CreateConversationReturnType }    from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { TelegramClientPort }                   from '../ports/index.js'

@Injectable()
export class AppointmentConversationCreateConversationUseCase {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  process(ctx: TelegramBotFormattedContextType): CreateConversationReturnType {
    const appointmentConversation = this.telegramClient.createConversation(ctx)
    return appointmentConversation
  }
}
