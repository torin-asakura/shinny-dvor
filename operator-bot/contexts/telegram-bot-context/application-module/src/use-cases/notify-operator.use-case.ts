import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../ports/index.js'
import { I18nPort }           from '../ports/index.js'
import { FetchClientPort }    from '../ports/index.js'

@Injectable()
export class NotifyOperatorUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly i18n: I18nPort,
    private readonly fetchClient: FetchClientPort
  ) {}

  async execute(appointmentData): Promise<void> {
    const newAppointmentOperatorMessage = this.i18n.newAppointmentOperatorMessage
    this.telegramClient.sendMessageToOperator(newAppointmentOperatorMessage)

    // TODO bookint service url to helpers
    const bookingTelegramBotOrigin = process.env.OPERATOR_BOT_ORIGIN || 'http://localhost'
    const bookingTelegramBotPort = process.env.BOOKING_TELEGRAM_BOT_PORT || 3000
    const fetchUrl = `${bookingTelegramBotOrigin}:${bookingTelegramBotPort}/notify-client`

    const messageReceivedToOperatorClientMessage = this.i18n.messageReceivedToOperatorClientMessage

    const body = JSON.stringify({
      telegramUseId: appointmentData.telegramUserId,
      messagaText: messageReceivedToOperatorClientMessage,
    })

    await this.fetchClient.post(fetchUrl, body)
  }
}
