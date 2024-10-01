import { Injectable }              from '@nestjs/common'
import { GetServiceTitlesUseCase } from '@query-client/application-module'

import { TelegramClientPort }      from '../../../ports/index.js'
import { ConversationPart }        from '../../conversation-part.class.js'
import { ruLocale }                from '../../../locals/index.js'

@Injectable()
export class AppointmentGetServiceConversationPart extends ConversationPart {
  // @ts-expect-error
  servicesData
  // @ts-expect-error
  serviceTitles

  conversationPartName: string = 'service'

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly getServiceTitlesUseCase: GetServiceTitlesUseCase
  ) {
    // @ts-expect-error
    super()
  }

  private async initData() {
    this.serviceTitles = await this.getServiceTitlesUseCase.execute()
  }

  // @ts-expect-error not assignable
  async sendQuestion(ctx) {
    await this.initData()

    const { selectServiceMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectServiceMessage, [
      ...this.serviceTitles,
      cancelAppointmentButton,
    ])
  }

  // @ts-expect-error not assignable
  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    const { missClickMessage } = ruLocale.appointmentConversation

    if (this.serviceTitles.includes(responseText)) {
      return responseText
    }

    message.reply(missClickMessage)
    return false
  }
}
