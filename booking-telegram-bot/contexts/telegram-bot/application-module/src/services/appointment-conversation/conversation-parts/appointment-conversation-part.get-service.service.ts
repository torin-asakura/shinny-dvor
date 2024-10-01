import { Injectable }         from '@nestjs/common'
import { RunQueryUseCase }    from '@query-client/application-module'

import { GET_SERVICES }       from '@globals/data'
import { checkArrayLength }   from '@globals/data'

import { TelegramClientPort } from '../../../ports/index.js'
import { ConversationPart }   from '../../conversation-part.class.js'
import { ruLocale }           from '../../../locals/index.js'

@Injectable()
export class AppointmentGetServiceConversationPart extends ConversationPart {
  // @ts-expect-error
  servicesData
  // @ts-expect-error
  serviceTitles

  conversationPartName: string = 'service'

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly runQueryUseCase: RunQueryUseCase
  ) {
    // @ts-expect-error
    super()
  }

  private async getServicesData() {
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

  // @ts-expect-error not assignable
  async sendQuestion(ctx) {
    await this.initData()

    const { selectServiceMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectServiceMessage, [
      ...this.serviceTitles,
      cancelAppointmentButton,
    ])
  }

  // @ts-expect-error not assignable
  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    const { missClickMessage } = ruLocale.appointmentConversation

    if (this.serviceTitles.includes(responseText)) {
      return responseText
    }

    message.reply(missClickMessage)
    return false
  }
}
