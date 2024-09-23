import { Injectable }          from '@nestjs/common'

import { TelegramClientPort }  from '../ports/index.js'
import { ConversationService } from '../services/index.js'

@Injectable()
export class ReceivedMessageUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly conversationService: ConversationService
  ) {}

  // TODO interface
  async execute(ctx: any) {
    await this.conversationService.process(ctx)
  }
}
