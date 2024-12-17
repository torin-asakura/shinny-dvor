import type { OnModuleInit }            from '@nestjs/common'

import { Injectable }                   from '@nestjs/common'

import { ConfirmAppointmentUseCase }    from '@operator-bot/telegram-bot-application-module'
import { CancelAppointmentUseCase }     from '@operator-bot/telegram-bot-application-module'
import { OnTgsnakeCallbackDataService } from '@operator-bot/tgsnake-adapter'

@Injectable()
export class CallbackDataProcessor implements OnModuleInit {
  constructor(
    private readonly onCallbackDataService: OnTgsnakeCallbackDataService,
    private readonly confirmAppointmentUseCase: ConfirmAppointmentUseCase,
    private readonly cancelAppointmentUseCase: CancelAppointmentUseCase
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processCommand()
  }

  private async processCommand(): Promise<void> {
    this.onCallbackDataService.process(async (ctx) => {
      const { callbackData } = ctx

      // TODO callbackData to constants
      if (callbackData === 'confirm-appointment-cb-data') {
        await this.confirmAppointmentUseCase.execute(ctx)
      } else if (callbackData === 'cancel-appointment-cb-data') {
        await this.cancelAppointmentUseCase.execute(ctx)
      }
    })
  }
}
