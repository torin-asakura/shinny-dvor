import type { OnModuleInit }       from '@nestjs/common'

import { Injectable }              from '@nestjs/common'

import { StartCommandUseCase }     from '@operator-bot/telegram-bot-application-module'
import { OnTgsnakeCommandService } from '@operator-bot/tgsnake-adapter'

@Injectable()
export class StartCommandProcessor implements OnModuleInit {
  constructor(
    private readonly onTgsnakeCommandService: OnTgsnakeCommandService,
    private readonly startCommand: StartCommandUseCase
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processCommand()
  }

  private async processCommand(): Promise<void> {
    this.onTgsnakeCommandService.process('start', async (ctx) => {
      await this.startCommand.execute(ctx)
    })
  }
}
