import type { OrmAppointmentDataType } from '../interfaces/index.js'

import { Injectable }                  from '@nestjs/common'

import { TelegramClientPort }          from '../ports/index.js'
import { I18nPort }                    from '../ports/index.js'

@Injectable()
export class NotifyOperatorUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly i18n: I18nPort
  ) {}

  async process(appointmentData: OrmAppointmentDataType): Promise<void> {
    try {
      // TODO move fetch to helper/getter or other

      // TODO некоторые значения в appointmentData - bigIng. нужно конвертировать их либо в строку, либо в число, для того, чтобы отправить json

      const operatorBotOrigin = process.env.OPERATOR_BOT_ORIGIN || 'http://localhost'
      const operatorBotPort = process.env.OPERATOR_BOT_PORT || 3000
      const fetchUrl = `${operatorBotOrigin}:${operatorBotPort}/notify-operator`

      const jsonData = JSON.stringify(appointmentData)

      // const response = await fetch(fetchUrl, {
      await fetch(fetchUrl, {
        method: 'post',
        body: jsonData,
      })
    } catch (error) {
      // TODO error class
      // eslint-disable-next-line no-console
      console.error(error)
      // const errorMessage = this.i18n.appointmentConversationServerError
      // await this.telegramClient.sendMessage(ctx, errorMessage)
    }
  }
}
