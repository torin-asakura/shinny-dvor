import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../ports/index.js'

@Injectable()
export class SendMessageUseCase {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  async execute() {
    console.log(this.telegramClient)
    console.log('execute send message use case')
    console.log('that should be a final действие')
  }
}
