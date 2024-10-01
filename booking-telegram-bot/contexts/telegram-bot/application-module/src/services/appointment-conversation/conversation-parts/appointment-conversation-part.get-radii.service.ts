import { Injectable }          from '@nestjs/common'
import { RunQueryUseCase }     from '@query-client/application-module'

import { GET_AVAILABLE_RADII } from '@globals/data'
import { checkArrayLength }    from '@globals/data'

import { TelegramClientPort }  from '../../../ports/index.js'
import { ConversationPart }    from '../../conversation-part.class.js'
import { ruLocale }            from '../../../locals/index.js'

@Injectable()
export class AppointmentGetRadiiConversationPart extends ConversationPart {
  // @ts-expect-error any
  radiiData
  // @ts-expect-error any
  radiiTitles

  conversationPartName: string = 'radii'

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly runQueryUseCase: RunQueryUseCase
  ) {
    // @ts-expect-error arguments
    super()
  }

  private async getRadiiData() {
    const queryData = await this.runQueryUseCase.execute(GET_AVAILABLE_RADII)
    const radiiQueryData = queryData.data.availableRadiusItems.nodes

    checkArrayLength({ radiiQueryData })

    return radiiQueryData
  }

  private getRadiiTitles() {
    return this.radiiData.map((singleRadiiData: any) => singleRadiiData.contentAddons.title)
  }

  private async initData() {
    this.radiiData = await this.getRadiiData()
    this.radiiTitles = this.getRadiiTitles()
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
