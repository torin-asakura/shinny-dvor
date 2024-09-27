import { Injectable }                     from '@nestjs/common'

import { TelegramClientPort }             from '../ports/index.js'
import { AppointmentConversationService } from '../services/index.js'

@Injectable()
export class ReceivedMessageUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly conversationService: AppointmentConversationService
  ) {}

  // TODO interface
  async execute(ctx: any) {
    await this.conversationService.process(ctx)
  }
}
