import { Injectable }         from '@nestjs/common'

import { SendMessageUseCase } from '@telegram-bot/application-module'

@Injectable()
export class StartCommandProcessor {
  constructor(private readonly useCase: SendMessageUseCase) {}

  async process() {
    console.log('bot start command process')
    this.useCase.execute()
  }
}
