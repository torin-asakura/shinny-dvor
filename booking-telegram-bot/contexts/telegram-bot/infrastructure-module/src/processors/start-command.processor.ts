import type { OnModuleInit }     from '@nestjs/common'

import { Injectable }            from '@nestjs/common'

import { TgsnakeAdapterService } from '@booking-telegram-bot/tgsnake-adapter'
import { StartCommand }          from '@telegram-bot/application-module'

@Injectable()
export class StartCommandProcessor implements OnModuleInit {
  constructor(
    private readonly telegramClient: TgsnakeAdapterService,
    private readonly startCommand: StartCommand
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processCommand_startCommand()
  }

  private async processCommand_startCommand(): Promise<void> {
    this.telegramClient.onCommand('start', async (ctx) => {
      await this.startCommand.execute(ctx)
    })
  }
}
