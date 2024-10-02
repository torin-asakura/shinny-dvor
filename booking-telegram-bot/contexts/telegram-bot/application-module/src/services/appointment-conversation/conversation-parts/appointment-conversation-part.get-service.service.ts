import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'

import { Injectable }                           from '@nestjs/common'

import { GetServiceTitlesUseCase }              from '@query-client/application-module'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { ConversationPart }                     from '../../conversation-part.class.js'
import { ruLocale }                             from '../../../locals/index.js'

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

  checkAnswer(ctx: TelegramBotFormattedContextType) {
    const { messageText: responseText } = ctx

    const { missClickMessage } = ruLocale.appointmentConversation

    if (this.serviceTitles.includes(responseText)) {
      return responseText
    }

    ctx.replyMessage(missClickMessage)
    return false
  }
}
