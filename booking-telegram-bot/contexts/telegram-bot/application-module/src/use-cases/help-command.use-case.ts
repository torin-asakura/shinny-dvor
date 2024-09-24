import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../ports/index.js'

@Injectable()
export class HelpCommandUseCase {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  // TODO interface
  async execute(ctx: any) {
    await this.telegramClient.sendMessage(ctx, 'help message')
  }
}
