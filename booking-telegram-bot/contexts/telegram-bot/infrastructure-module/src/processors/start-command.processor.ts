import type { OnModuleInit }       from '@nestjs/common'

import { Injectable }              from '@nestjs/common'

import { OnTgsnakeCommandService } from '@booking-telegram-bot/tgsnake-adapter'
import { StartCommandUseCase }     from '@telegram-bot/application-module'

@Injectable()
export class StartCommandProcessor implements OnModuleInit {
  constructor(
    private readonly onTgsnakeCommandService: OnTgsnakeCommandService,
    private readonly startCommand: StartCommandUseCase
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processCommand_startCommand()
  }

  private async processCommand_startCommand(): Promise<void> {
    this.onTgsnakeCommandService.process('start', async (ctx) => {
      await this.startCommand.execute(ctx)
    })
  }
}
