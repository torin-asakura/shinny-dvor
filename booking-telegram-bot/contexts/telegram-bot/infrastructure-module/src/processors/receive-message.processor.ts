import type { OnModuleInit }     from '@nestjs/common'

import { Injectable }            from '@nestjs/common'

import { TgsnakeAdapterService } from '@booking-telegram-bot/tgsnake-adapter'
import { ReceiveMessageUseCase } from '@telegram-bot/application-module'

@Injectable()
export class ReceiveMessageProcessor implements OnModuleInit {
  constructor(
    private readonly telegramClient: TgsnakeAdapterService,
    private readonly receiveMessageUseCase: ReceiveMessageUseCase
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processReceiveMessage()
  }

  private async processReceiveMessage(): Promise<void> {
    this.telegramClient.onMessage(async (ctx) => {
      await this.receiveMessageUseCase.process(ctx)
    })
  }
}
