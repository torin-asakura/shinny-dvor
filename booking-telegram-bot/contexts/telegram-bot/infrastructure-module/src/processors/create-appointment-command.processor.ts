import type { OnModuleInit }              from '@nestjs/common'

import { Injectable }                     from '@nestjs/common'

import { TgsnakeAdapterService }          from '@booking-telegram-bot/tgsnake-adapter'
import { AppointmentConversationCommand } from '@telegram-bot/application-module'

@Injectable()
export class CreateAppointmentCommandProcessor implements OnModuleInit {
  constructor(
    private readonly telegramClient: TgsnakeAdapterService,
    private readonly appointmentConversationCommand: AppointmentConversationCommand
  ) {}

  async onModuleInit(): Promise<void> {
    await this.processCommand_createAppointment()
  }

  private async processCommand_createAppointment(): Promise<void> {
    this.telegramClient.onCommand('create_appointment', async (ctx) => {
      await this.appointmentConversationCommand.process(ctx)
    })
  }
}
