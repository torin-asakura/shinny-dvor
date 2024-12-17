import type { FormattedContextType } from '../interfaces/index.js'

import { Injectable }                from '@nestjs/common'

import { TelegramClientPort }        from '../ports/index.js'
import { FetchClientPort }           from '../ports/index.js'
import { I18nPort }                  from '../ports/index.js'

@Injectable()
export class ConfirmAppointmentUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly fetchClient: FetchClientPort,
    private readonly i18nPort: I18nPort
  ) {}

  async execute(ctx: FormattedContextType): Promise<void> {
    const confirmAppointmentClientMessage = this.i18nPort.confirmAppointmentClientMessage
    const confirmAppointmentOperatorButton = this.i18nPort.confirmAppointmentOperatorButton

    // TODO get url to helpers
    this.telegramClient.editMessage(ctx, confirmAppointmentOperatorButton)
    const bookingTelegramBotOrigin = process.env.OPERATOR_BOT_ORIGIN || 'http://localhost'
    const bookingTelegramBotPort = process.env.BOOKING_TELEGRAM_BOT_PORT || 3000
    const fetchUrl = `${bookingTelegramBotOrigin}:${bookingTelegramBotPort}/notify-client`

    const body = JSON.stringify({
      telegramUseId: Number(ctx.userId),
      messagaText: confirmAppointmentClientMessage,
    })

    this.fetchClient.post(fetchUrl, body)
  }
}
