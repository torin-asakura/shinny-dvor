import { Injectable }                     from '@nestjs/common'

import { TgsnakeAdapterService }          from '@booking-telegram-bot/tgsnake-adapter'
import { StartCommandUseCase }            from '@telegram-bot/application-module'
import { HelpCommandUseCase }             from '@telegram-bot/application-module'
import { AppointmentConversationUseCase } from '@telegram-bot/application-module'
import { ReceiveMessageUseCase }          from '@telegram-bot/application-module'

@Injectable()
export class BotListenProcessor {
  constructor(
    private readonly telegramClient: TgsnakeAdapterService,
    private readonly startCommandUseCase: StartCommandUseCase,
    private readonly helpCommandUseCase: HelpCommandUseCase,
    private readonly appointmentConversationUseCase: AppointmentConversationUseCase,
    private readonly receiveMessageService: ReceiveMessageUseCase
  ) {}

  async process() {
    this.telegramClient.cmd('start', async (ctx) => {
      await this.startCommandUseCase.execute(ctx)
    })

    this.telegramClient.cmd('help', async (ctx) => {
      await this.helpCommandUseCase.execute(ctx)
    })

    this.telegramClient.cmd('create_appointment', async (ctx) => {
      await this.appointmentConversationUseCase.process(ctx)
    })

    this.telegramClient.on('msg.text', async (ctx) => {
      await this.receiveMessageService.process(ctx)
    })
  }
}
