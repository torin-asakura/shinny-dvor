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
    // TODO что такое ctx для этого уровня???
    // его нужно переопределить - унифицировать. для того, чтобы передавать по всему приложению
    this.telegramClient.onCommand('start', async (ctx) => {
      await this.startCommandUseCase.execute(ctx)
    })

    this.telegramClient.onCommand('help', async (ctx) => {
      await this.helpCommandUseCase.execute(ctx)
    })

    this.telegramClient.onCommand('create_appointment', async (ctx) => {
      await this.appointmentConversationUseCase.process(ctx)
    })

    this.telegramClient.onMessage(async (ctx) => {
      await this.receiveMessageService.process(ctx)
    })
  }
}
