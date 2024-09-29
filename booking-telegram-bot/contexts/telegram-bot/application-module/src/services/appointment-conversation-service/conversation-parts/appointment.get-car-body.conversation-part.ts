import { Injectable }                     from '@nestjs/common'

import { GET_CAR_BODIES }                 from '@globals/data'
import { RunQueryUseCase }                from '@graphql-client/application-module'
import { checkArrayLength }               from '@globals/data'

import { TelegramClientPort }             from '../../../ports/index.js'
import { ConversationPart }               from '../../conversation-part.class.js'
import { CANCEL_APPOINTMENT_BUTTON_TEXT } from '../appointment.constants.js'

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

    // TODO keyboard with cancel button
    await this.telegramClient.sendMessageWithMarkup(ctx, 'kuzov auto quesiton*', [
      ...this.carBodyTitles,
      CANCEL_APPOINTMENT_BUTTON_TEXT,
    ])
  }

  checkAnswer(ctx) {
    const { message } = ctx

    const { text: responseText } = message

    // TODO switch case
    if (responseText === CANCEL_APPOINTMENT_BUTTON_TEXT || responseText === '/cancel') {
      console.log('cancel appointment')
    } else if (this.carBodyTitles.includes(responseText)) {
      return responseText
    }

    message.reply('Выберите ответ на клавиатуре, либо нажмите /cancel, чтобы отменить запись')
    return false
  }
}
