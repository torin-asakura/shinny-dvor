import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'

import { Injectable }                           from '@nestjs/common'

import { GetCarBodyTitlesUseCase }              from '@query-client/application-module'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { ConversationPart }                     from '../../conversation-part.class.js'
import { ruLocale }                             from '../../../locals/index.js'

@Injectable()
export class AppointmentGetCarBodyConversationPart extends ConversationPart {
  // @ts-expect-error any
  carBodiesData
  // @ts-expect-error any
  carBodyTitles

  conversationPartName: string = 'carBody'

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly getCarBodyTitlesUseCase: GetCarBodyTitlesUseCase
  ) {
    super()
  }

  private async initData() {
    this.carBodyTitles = await this.getCarBodyTitlesUseCase.execute()
  }

  async sendQuestion(ctx) {
    await this.initData()

    const { selectCarBodyMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectCarBodyMessage, [
      ...this.carBodyTitles,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType) {
    const { messageText: responseText } = ctx

    const { missClickMessage } = ruLocale.appointmentConversation

    if (this.carBodyTitles.includes(responseText)) {
      return responseText
    }

    ctx.replyMessage(missClickMessage)
    return false
  }
}
