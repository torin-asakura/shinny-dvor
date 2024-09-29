import { Injectable }                     from '@nestjs/common'

import { GET_AVAILABLE_RADII }            from '@globals/data'
import { RunQueryUseCase }                from '@graphql-client/application-module'
import { checkArrayLength }               from '@globals/data'

import { TelegramClientPort }             from '../../../ports/index.js'
import { CANCEL_APPOINTMENT_BUTTON_TEXT } from '../appointment.constants.js'

// TODO create conversationPart Class with createConversation method and extend that class

@Injectable()
export class AppointmentGetRadiiConversationPart {
  // TODO interfaces
  radiiData: any
  radiiTitles: string

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly runQueryUseCase: RunQueryUseCase
  ) {}

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

    await this.telegramClient.sendMessageWithMarkup(ctx, 'diameter coles*', [
      ...this.radiiTitles,
      CANCEL_APPOINTMENT_BUTTON_TEXT,
    ])
  }

  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    // TODO switch case
    if (responseText === CANCEL_APPOINTMENT_BUTTON_TEXT || responseText === '/cancel') {
      console.log('cancel appointment')
    } else if (this.radiiTitles.includes(responseText)) {
      return responseText
    }

    message.reply('Выберите ответ на клавиатуре, либо нажмите /cancel, чтобы отменить запись')
    return false
  }
}
