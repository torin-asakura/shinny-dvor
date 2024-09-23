import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../ports/index.js'

@Injectable()
export class StartCommandUseCase {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  // TODO interface
  async execute(ctx: any) {
    // removeConversation(ctx)
    // await reply(ctx, 'welcome message')
    // await runConversationA1(ctx)
    await this.telegramClient.sendMessage(ctx, 'welcome message')
  }
}
