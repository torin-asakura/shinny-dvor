import type { FormattedContextType } from '../interfaces/index.js'

import { Injectable }                from '@nestjs/common'

import { TelegramClientPort }        from '../ports/index.js'
import { FetchClientPort }           from '../ports/index.js'
import { I18nPort }                  from '../ports/index.js'

@Injectable()
export class CancelAppointmentUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly fetchClient: FetchClientPort,
    private readonly i18nPort: I18nPort
  ) {}

  async execute(ctx: FormattedContextType): Promise<void> {
    const cancelAppointmentButtonText = this.i18nPort.cancelAppointmentOperatorButton
    const cancelAppointmentClientMessage = this.i18nPort.cancelAppointmentClientMessage

    this.telegramClient.editMessage(ctx, cancelAppointmentButtonText)

    // TODO getBookingTelegramBotApiUrlHelper
    const bookingTelegramBotOrigin = process.env.OPERATOR_BOT_ORIGIN || 'http://localhost'
    const bookingTelegramBotPort = process.env.BOOKING_TELEGRAM_BOT_PORT || 3000
    const fetchUrl = `${bookingTelegramBotOrigin}:${bookingTelegramBotPort}/notify-client`

    const body = JSON.stringify({
      telegramUseId: Number(ctx.userId),
      messagaText: cancelAppointmentClientMessage,
    })

    this.fetchClient.post(fetchUrl, body)
  }
}
