import { Injectable }         from '@nestjs/common'
import { Inject }             from '@nestjs/common'
import { ClientProxy }        from '@nestjs/microservices'

import { TelegramClientPort } from '../ports/index.js'
import { I18nPort }           from '../ports/index.js'

@Injectable()
export class NotifyOperatorUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly i18n: I18nPort,
    @Inject('BOOKING_TELEGRAM_BOT_SERVICE') private client: ClientProxy
  ) {}

  async execute(appointmentData): Promise<void> {
    const messageReceivedToOperatorClientMessage = this.i18n.messageReceivedToOperatorClientMessage
    this.client.emit<number>('notify_client', {
      messageText: messageReceivedToOperatorClientMessage,
    })

    const newAppointmentOperatorMessage = this.i18n.newAppointmentOperatorMessage
    this.telegramClient.sendMessageToOperator(newAppointmentOperatorMessage)
  }
}
