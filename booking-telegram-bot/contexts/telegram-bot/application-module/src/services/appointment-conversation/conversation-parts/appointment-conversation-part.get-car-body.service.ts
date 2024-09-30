import { Injectable }         from '@nestjs/common'

import { GET_CAR_BODIES }     from '@globals/data'
import { RunQueryUseCase }    from '@graphql-client/application-module'
import { checkArrayLength }   from '@globals/data'

import { TelegramClientPort } from '../../../ports/index.js'
import { ConversationPart }   from '../../conversation-part.class.js'
import { ruLocale }           from '../../../locals/index.js'

// TODO create conversationPart Class with createConversation method and extend that class

@Injectable()
export class AppointmentGetCarBodyConversationPart extends ConversationPart {
  // TODO interfaces
  carBodiesData: any
  carBodyTitles: Array<string>

  conversationPartName: string = 'carBody'

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly runQueryUseCase: RunQueryUseCase
  ) {
    super()
  }

  private async getCarBodiesData() {
    // TODO income interfaces
    const queryData = await this.runQueryUseCase.execute(GET_CAR_BODIES)
    const carBodiesQueryData = queryData.data.carBodyItems.nodes

    checkArrayLength({ carBodiesQueryData })

    return carBodiesQueryData
  }

  // TODO interfaces
  private getCarBodyTitles() {
    return this.carBodiesData.map((singleCarData: any) => singleCarData.contentAddons.title)
  }

  private async initData() {
    this.carBodiesData = await this.getCarBodiesData()
    this.carBodyTitles = this.getCarBodyTitles()
  }

  async sendQuestion(ctx) {
    await this.initData()

    const { selectCarBodyMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    // TODO move cancel button text to adapter consts
    // TODO add options to sendMessage method on adapter
    // add cancelButton:boolean option flag to sendMessage method

    // TODO keyboard with cancel button
    await this.telegramClient.sendMessageWithMarkup(ctx, selectCarBodyMessage, [
      ...this.carBodyTitles,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    // TODO move it in to parent class with checkAnswerCommand
    const { missClickMessage } = ruLocale.appointmentConversation

    // TODO switch case
    // TODO check answer to parent class
    if (this.carBodyTitles.includes(responseText)) {
      return responseText
    }

    message.reply(missClickMessage)
    return false
  }
}
