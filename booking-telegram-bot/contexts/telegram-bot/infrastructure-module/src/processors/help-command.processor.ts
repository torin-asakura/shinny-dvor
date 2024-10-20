import type { OnModuleInit } from '@nestjs/common'

import { Injectable }        from '@nestjs/common'

import { OnCommandService }  from '@booking-telegram-bot/tgsnake-adapter'
import { HelpCommand }       from '@telegram-bot/application-module'

@Injectable()
export class HelpCommandProcessor implements OnModuleInit {
  constructor(
    private readonly onCommandUseCase: OnCommandService,
    private readonly helpCommand: HelpCommand
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processCommand_helpCommand()
  }

  private async processCommand_helpCommand(): Promise<void> {
    this.onCommandUseCase.process('help', async (ctx) => {
      await this.helpCommand.execute(ctx)
    })
  }
}
