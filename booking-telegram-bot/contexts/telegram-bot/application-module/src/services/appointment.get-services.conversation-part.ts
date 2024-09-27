import { Injectable }                     from '@nestjs/common'

import { GET_SERVICES }                   from '@globals/data'
import { RunQueryUseCase }                from '@graphql-client/application-module'
import { checkArrayLength }               from '@globals/data'

import { TelegramClientPort }             from '../ports/index.js'
import { CANCEL_APPOINTMENT_BUTTON_TEXT } from './appointment.constants.js'

// TODO create conversationPart Class with createConversation method and extend that class

@Injectable()
export class AppointmentGetServicesConversationPart {
  // TODO interfaces
  servicesData: any
  serviceTitles: Array<string>

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly runQueryUseCase: RunQueryUseCase
  ) {}

  private async getServicesData() {
    // TODO income interfaces
    const queryData = await this.runQueryUseCase.execute(GET_SERVICES)
    const servicesQueryData = queryData.data.services.nodes

    checkArrayLength({ servicesQueryData })

    return servicesQueryData
  }

  private getServiceTitles() {
    return this.servicesData.map((singleServiceData: any) => singleServiceData.servicesParams.title)
  }

  private async initData() {
    this.servicesData = await this.getServicesData()
    this.serviceTitles = this.getServiceTitles()
  }

  async sendQuestion(ctx) {
    await this.initData()

    await this.telegramClient.sendMessageWithMarkup(ctx, 'tip remonta*', [
      ...this.serviceTitles,
      CANCEL_APPOINTMENT_BUTTON_TEXT,
    ])
  }

  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    // TODO switch case
    if (responseText === CANCEL_APPOINTMENT_BUTTON_TEXT || responseText === '/cancel') {
      console.log('cancel appointment')
    } else if (this.serviceTitles.includes(responseText)) {
      return responseText
    }

    message.reply('Выберите ответ на клавиатуре, либо нажмите /cancel, чтобы отменить запись')
    return false
  }
}
