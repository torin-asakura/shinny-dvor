import { Injectable }              from '@nestjs/common'
import { GetCarBodyTitlesUseCase } from '@query-client/application-module'

import { TelegramClientPort }      from '../../../ports/index.js'
import { ConversationPart }        from '../../conversation-part.class.js'
import { ruLocale }                from '../../../locals/index.js'

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
    // @ts-expect-error need argument
    super()
  }

  private async initData() {
    this.carBodyTitles = await this.getCarBodyTitlesUseCase.execute()
  }

  // @ts-expect-error not assignable
  async sendQuestion(ctx) {
    await this.initData()

    const { selectCarBodyMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectCarBodyMessage, [
      ...this.carBodyTitles,
      cancelAppointmentButton,
    ])
  }

  // @ts-expect-error not assignable
  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    const { missClickMessage } = ruLocale.appointmentConversation

    if (this.carBodyTitles.includes(responseText)) {
      return responseText
    }

    message.reply(missClickMessage)
    return false
  }
}
