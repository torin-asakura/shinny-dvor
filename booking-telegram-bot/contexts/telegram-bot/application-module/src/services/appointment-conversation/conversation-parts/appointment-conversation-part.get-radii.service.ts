import { Injectable }          from '@nestjs/common'

import { GET_AVAILABLE_RADII } from '@globals/data'
import { RunQueryUseCase }     from '@graphql-client/application-module'
import { checkArrayLength }    from '@globals/data'

import { TelegramClientPort }  from '../../../ports/index.js'
import { ConversationPart }    from '../../conversation-part.class.js'
import { ruLocale }            from '../../../locals/index.js'

// TODO create conversationPart Class with createConversation method and extend that class

@Injectable()
export class AppointmentGetRadiiConversationPart extends ConversationPart {
  // TODO interfaces
  radiiData: any
  radiiTitles: string

  conversationPartName: string = 'radii'

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly runQueryUseCase: RunQueryUseCase
  ) {
    super()
  }

  private async getRadiiData() {
    // TODO income interfaces
    const queryData = await this.runQueryUseCase.execute(GET_AVAILABLE_RADII)
    const radiiQueryData = queryData.data.availableRadiusItems.nodes

    checkArrayLength({ radiiQueryData })

    return radiiQueryData
  }

  // TODO interfaces
  private getRadiiTitles() {
    return this.radiiData.map((singleRadiiData: any) => singleRadiiData.contentAddons.title)
  }

  private async initData() {
    this.radiiData = await this.getRadiiData()
    this.radiiTitles = this.getRadiiTitles()
  }

  async sendQuestion(ctx) {
    await this.initData()

    const { selectRadiiMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectRadiiMessage, [
      ...this.radiiTitles,
      cancelAppointmentButton,
    ])
  }

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
