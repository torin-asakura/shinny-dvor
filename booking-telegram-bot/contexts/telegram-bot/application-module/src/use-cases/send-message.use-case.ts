import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../ports/index.js'

@Injectable()
export class SendMessageUseCase {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  async execute() {
    this.telegramClient.listen()
  }
}
