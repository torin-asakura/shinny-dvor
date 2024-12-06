import type { OrmAppointmentDataType } from '../interfaces/index.js'

import { Injectable }                  from '@nestjs/common'
import { Inject }                      from '@nestjs/common'
import { ClientProxy }                 from '@nestjs/microservices'

import { TelegramClientPort }          from '../ports/index.js'
import { I18nPort }                    from '../ports/index.js'

@Injectable()
export class NotifyOperatorUseCase {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly i18n: I18nPort,
    @Inject('OPERATOR_BOT_SERVICE') private client: ClientProxy
  ) {}

  async process(appointmentData: OrmAppointmentDataType): Promise<void> {
    try {
      this.client.emit<number>('notify_operator', {
        messageText: 'some test from booking bot',
      })

      // await fetch(fetchUrl, {
      //   method: 'post',
      //   body: jsonData,
      // })
    } catch (error) {
      // TODO error class
      // eslint-disable-next-line no-console
      console.error(error)
      // const errorMessage = this.i18n.appointmentConversationServerError
      // await this.telegramClient.sendMessage(ctx, errorMessage)
    }
  }
}
