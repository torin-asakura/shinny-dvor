import type { OnModuleInit }              from '@nestjs/common'

import { Injectable }                     from '@nestjs/common'

import { TgsnakeAdapterService }          from '@booking-telegram-bot/tgsnake-adapter'
import { StartCommand }                   from '@telegram-bot/application-module'
import { HelpCommand }                    from '@telegram-bot/application-module'
import { AppointmentConversationCommand } from '@telegram-bot/application-module'
import { ReceiveMessageUseCase }          from '@telegram-bot/application-module'

// TODO divide that class into each command personal processor

@Injectable()
export class BotListenProcessor implements OnModuleInit {
  constructor(
    private readonly telegramClient: TgsnakeAdapterService,
    private readonly startCommand: StartCommand,
    private readonly helpCommand: HelpCommand,
    private readonly appointmentConversationCommand: AppointmentConversationCommand,
    private readonly receiveMessageUseCase: ReceiveMessageUseCase
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processCommand_startCommand()
    await this.processCommand_helpCommand()
    await this.processCommand_createAppointment()
    await this.processReceiveMessage()
  }

  private async processCommand_startCommand(): Promise<void> {
    this.telegramClient.onCommand('start', async (ctx) => {
      await this.startCommand.execute(ctx)
    })
  }

  private async processCommand_helpCommand(): Promise<void> {
    this.telegramClient.onCommand('help', async (ctx) => {
      await this.helpCommand.execute(ctx)
    })
  }

  private async processCommand_createAppointment(): Promise<void> {
    this.telegramClient.onCommand('create_appointment', async (ctx) => {
      await this.appointmentConversationCommand.process(ctx)
    })
  }

  private async processReceiveMessage(): Promise<void> {
    this.telegramClient.onMessage(async (ctx) => {
      await this.receiveMessageUseCase.process(ctx)
    })
  }
}
