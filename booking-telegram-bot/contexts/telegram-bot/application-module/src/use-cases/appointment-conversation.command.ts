import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { AppointmentConversationService }       from '../services/index.js'

@Injectable()
export class AppointmentConversationCommand {
  constructor(private readonly appointmentConversationService: AppointmentConversationService) {}

  async process(ctx: TelegramBotFormattedContextType): Promise<void> {
    // TODO locales
    await this.appointmentConversationService.process(ctx)
  }
}
