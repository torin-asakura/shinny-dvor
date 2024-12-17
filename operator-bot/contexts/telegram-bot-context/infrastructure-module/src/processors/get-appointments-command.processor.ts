import type { OnModuleInit }       from '@nestjs/common'

import { Injectable }              from '@nestjs/common'

import { GetAppointmentsUseCase }  from '@operator-bot/telegram-bot-application-module'
import { OnTgsnakeCommandService } from '@operator-bot/tgsnake-adapter'

@Injectable()
export class GetAppointmentsCommandProcessor implements OnModuleInit {
  constructor(
    private readonly onTgsnakeCommandService: OnTgsnakeCommandService,
    private readonly getAppointmentsUseCase: GetAppointmentsUseCase
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processCommand()
  }

  private async processCommand(): Promise<void> {
    this.onTgsnakeCommandService.process('get_appointments', async (ctx) => {
      await this.getAppointmentsUseCase.execute(ctx)
    })
  }
}
