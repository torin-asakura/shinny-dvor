import { Injectable }         from '@nestjs/common'

import { GET_SERVICES }       from '@globals/data'
import { RunQueryUseCase }    from '@graphql-client/application-module'
import { checkArrayLength }   from '@globals/data'

import { TelegramClientPort } from '../../../ports/index.js'
import { ConversationPart }   from '../../conversation-part.class.js'
import { ruLocale }           from '../../../locals/index.js'

// TODO create conversationPart Class with createConversation method and extend that class

@Injectable()
export class AppointmentGetServiceConversationPart extends ConversationPart {
  // TODO interfaces
  servicesData: any
  serviceTitles: Array<string>

  conversationPartName: string = 'service'

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly runQueryUseCase: RunQueryUseCase
  ) {
    super()
  }

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

    const { selectServiceMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectServiceMessage, [
      ...this.serviceTitles,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    const { cancelAppointmentButton, cancelAppointmentCommand, missClickMessage } =
      ruLocale.appointmentConversation

    // TODO switch case
    if (this.serviceTitles.includes(responseText)) {
      return responseText
    }

    message.reply(missClickMessage)
    return false
  }
}
