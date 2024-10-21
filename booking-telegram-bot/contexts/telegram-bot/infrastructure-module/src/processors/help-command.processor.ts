import type { OnModuleInit }       from '@nestjs/common'

import { Injectable }              from '@nestjs/common'

import { OnTgsnakeCommandService } from '@booking-telegram-bot/tgsnake-adapter'
import { HelpCommandUseCase }      from '@telegram-bot/application-module'

@Injectable()
export class HelpCommandProcessor implements OnModuleInit {
  constructor(
    private readonly onTgsnakeCommandService: OnTgsnakeCommandService,
    private readonly helpCommand: HelpCommandUseCase
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processCommand_helpCommand()
  }

  private async processCommand_helpCommand(): Promise<void> {
    this.onTgsnakeCommandService.process('help', async (ctx) => {
      await this.helpCommand.execute(ctx)
    })
  }
}
