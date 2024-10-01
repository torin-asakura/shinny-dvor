import { Injectable }            from '@nestjs/common'
import { GetRadiiTitlesUseCase } from '@query-client/application-module'

import { TelegramClientPort }    from '../../../ports/index.js'
import { ConversationPart }      from '../../conversation-part.class.js'
import { ruLocale }              from '../../../locals/index.js'

@Injectable()
export class AppointmentGetRadiiConversationPart extends ConversationPart {
  // @ts-expect-error any
  radiiData
  // @ts-expect-error any
  radiiTitles

  conversationPartName: string = 'radii'

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly getRadiiTitlesUseCase: GetRadiiTitlesUseCase
  ) {
    // @ts-expect-error arguments
    super()
  }

  private async initData() {
    this.radiiTitles = await this.getRadiiTitlesUseCase.execute()
  }

  // @ts-expect-error not assignable
  async sendQuestion(ctx) {
    await this.initData()

    const { selectRadiiMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectRadiiMessage, [
      ...this.radiiTitles,
      cancelAppointmentButton,
    ])
  }

  // @ts-expect-error not assignable
  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    const { missClickMessage } = ruLocale.appointmentConversation

    if (this.radiiTitles.includes(responseText)) {
      return responseText
    }

    message.reply(missClickMessage)
    return false
  }
}
