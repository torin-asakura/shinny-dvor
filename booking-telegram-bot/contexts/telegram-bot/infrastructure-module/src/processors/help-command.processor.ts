import type { OnModuleInit }     from '@nestjs/common'

import { Injectable }            from '@nestjs/common'

import { TgsnakeAdapterService } from '@booking-telegram-bot/tgsnake-adapter'
import { HelpCommand }           from '@telegram-bot/application-module'

@Injectable()
export class HelpCommandProcessor implements OnModuleInit {
  constructor(
    private readonly telegramClient: TgsnakeAdapterService,
    private readonly helpCommand: HelpCommand
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processCommand_helpCommand()
  }

  private async processCommand_helpCommand(): Promise<void> {
    this.telegramClient.onCommand('help', async (ctx) => {
      await this.helpCommand.execute(ctx)
    })
  }
}
