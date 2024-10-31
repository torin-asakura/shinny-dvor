// TODO
/* eslint-disable */

import type { FormattedContextType }       from '../interfaces/index.js'

import { Injectable }                      from '@nestjs/common'

import { OperatorUseCaseAbstractClass }    from '../interfaces/index.js'
import { TelegramClientPort }              from '../ports/index.js'
import { I18nPort }                        from '../ports/index.js'
import { getFormattedAppointmentsMessage } from '../getters/index.js'

@Injectable()
export class GetAppointmentsUseCase extends OperatorUseCaseAbstractClass {
  constructor(telegramClient: TelegramClientPort, i18n: I18nPort) {
    super(telegramClient, i18n)
  }

  async executeForOperator(ctx: FormattedContextType): Promise<void> {
    // TODO move fetch function to getters

    const bookingTelegramBotOrigin = process.env.BOOKING_TELEGRAM_BOT_ORIGIN || 'http://localhost'
    const bookingTelegramBotPort = process.env.BOOKING_TELEGRAM_BOT_PORT || 3000

    const fetchUrl = `${bookingTelegramBotOrigin}:${bookingTelegramBotPort}/get-appointments`

    const response = await fetch(fetchUrl)
    const responseData = await response.json()

    console.log(responseData)

    const titles = {
      carBodyTitle: this.i18n.carBodyTitle,
      radiiTitle: this.i18n.radiiTitle,
      serviceTitle: this.i18n.serviceTitle,
      selectedDateTitle: this.i18n.selectedDateTitle,
      commentaryTitle: this.i18n.commentaryTitle,
    }

    // TODO - перебрать все записи и для каждой даты выделить новый заголовок
    for (const appointmentData of responseData) {
      const formattedMessage = getFormattedAppointmentsMessage({
        appointmentData,
        titles,
      })

      this.telegramClient.sendMessage(ctx, formattedMessage)
    }
  }
}
