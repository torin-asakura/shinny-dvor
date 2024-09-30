import { Injectable }         from '@nestjs/common'

import { GET_CAR_BODIES }     from '@globals/data'
import { RunQueryUseCase }    from '@graphql-client/application-module'
import { checkArrayLength }   from '@globals/data'

import { TelegramClientPort } from '../../../ports/index.js'
import { ConversationPart }   from '../../conversation-part.class.js'
import { ruLocale }           from '../../../locals/index.js'

@Injectable()
export class AppointmentGetCarBodyConversationPart extends ConversationPart {
  // @ts-expect-error any
  carBodiesData
  // @ts-expect-error any
  carBodyTitles

  conversationPartName: string = 'carBody'

  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly runQueryUseCase: RunQueryUseCase
  ) {
    // @ts-expect-error need argument
    super()
  }

  private async getCarBodiesData() {
    const queryData = await this.runQueryUseCase.execute(GET_CAR_BODIES)
    const carBodiesQueryData = queryData.data.carBodyItems.nodes

    checkArrayLength({ carBodiesQueryData })

    return carBodiesQueryData
  }

  private getCarBodyTitles() {
    return this.carBodiesData.map((singleCarData: any) => singleCarData.contentAddons.title)
  }

  private async initData() {
    this.carBodiesData = await this.getCarBodiesData()
    this.carBodyTitles = this.getCarBodyTitles()
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
