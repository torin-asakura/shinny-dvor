import type { OnModuleInit }     from '@nestjs/common'

import { Injectable }            from '@nestjs/common'

import { OnMessageUseCase }      from '@booking-telegram-bot/tgsnake-adapter'
import { ReceiveMessageUseCase } from '@telegram-bot/application-module'

@Injectable()
export class ReceiveMessageProcessor implements OnModuleInit {
  constructor(
    private readonly onMessageUseCase: OnMessageUseCase,
    private readonly receiveMessageUseCase: ReceiveMessageUseCase
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processReceiveMessage()
  }

  private async processReceiveMessage(): Promise<void> {
    this.onMessageUseCase.process(async (ctx) => {
      await this.receiveMessageUseCase.process(ctx)
    })
  }
}
