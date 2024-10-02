import { Injectable }                     from '@nestjs/common'

import { TgsnakeAdapterService }          from '@booking-telegram-bot/tgsnake-adapter'
import { StartCommand }                   from '@telegram-bot/application-module'
import { HelpCommand }                    from '@telegram-bot/application-module'
import { AppointmentConversationCommand } from '@telegram-bot/application-module'
import { ReceiveMessageUseCase }          from '@telegram-bot/application-module'

@Injectable()
export class BotListenProcessor {
  constructor(
    private readonly telegramClient: TgsnakeAdapterService,
    private readonly startCommand: StartCommand,
    private readonly helpCommand: HelpCommand,
    private readonly appointmentConversationCommand: AppointmentConversationCommand,
    private readonly receiveMessageUseCase: ReceiveMessageUseCase
  ) {}

  async processCommand_startCommand() {
    this.telegramClient.onCommand('start', async (ctx) => {
      await this.startCommand.execute(ctx)
    })
  }

  async processCommand_helpCommand() {
    this.telegramClient.onCommand('help', async (ctx) => {
      await this.helpCommand.execute(ctx)
    })
  }

  async processCommand_createAppointment() {
    this.telegramClient.onCommand('create_appointment', async (ctx) => {
      await this.appointmentConversationCommand.process(ctx)
    })
  }

  async processReceiveMessage() {
    // TODO что такое ctx для этого уровня???
    // его нужно переопределить - унифицировать. для того, чтобы передавать по всему приложению
    this.telegramClient.onMessage(async (ctx) => {
      await this.receiveMessageUseCase.process(ctx)
    })
  }
}
