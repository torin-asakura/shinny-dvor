import { Injectable }                              from '@nestjs/common'

import { GET_CAR_BODIES }                          from '@globals/data'
import { GET_AVAILABLE_RADII }                     from '@globals/data'
import { GET_SERVICES }                            from '@globals/data'
import { RunQueryUseCase }                         from '@graphql-client/application-module'
import { checkArrayLength }                        from '@globals/data'

import { TelegramClientPort }                      from '../ports/index.js'
import { CANCEL_APPOINTMENT_BUTTON_TEXT }          from './conversation.constants.js'
import { CONTINUE_WITHOUT_COMMENTARY_BUTTON_TEXT } from './conversation.constants.js'

@Injectable()
export class ConversationService {
  constructor(
    private readonly telegramClient: TelegramClientPort,
    private readonly runQueryUseCase: RunQueryUseCase
  ) {}

  private async getCarBodiesData() {
    // TODO income interfaces
    const queryData = await this.runQueryUseCase.execute(GET_CAR_BODIES)
    const carBodiesQueryData = queryData.data.carBodyItems.nodes

    checkArrayLength({ carBodiesQueryData })

    return carBodiesQueryData
  }

  // TODO interfaces
  private getCarBodyTitles(carBodiesData: any) {
    return carBodiesData.map((singleCarData: any) => singleCarData.contentAddons.title)
  }

  private async getRadiiData() {
    // TODO income interfaces
    const queryData = await this.runQueryUseCase.execute(GET_AVAILABLE_RADII)
    const radiiQueryData = queryData.data.availableRadiusItems.nodes

    checkArrayLength({ radiiQueryData })

    return radiiQueryData
  }

  // TODO interfaces
  private getRadiiTitles(radiiData: any) {
    return radiiData.map((singleRadiiData: any) => singleRadiiData.contentAddons.title)
  }

  private async getServicesData() {
    // TODO income interfaces
    const queryData = await this.runQueryUseCase.execute(GET_SERVICES)
    const servicesQueryData = queryData.data.services.nodes

    checkArrayLength({ servicesQueryData })

    return servicesQueryData
  }

  private getServiceTitles(servicesData: any) {
    return servicesData.map((singleServiceData: any) => singleServiceData.servicesParams.title)
  }

  // TODO inteface
  async process(ctx: any) {
    try {
      const conversationData: Record<string, string> = {}

      const carBodiesData = await this.getCarBodiesData()
      const radiiData = await this.getRadiiData()
      const servicesData = await this.getServicesData()

      const carBodyTitles = this.getCarBodyTitles(carBodiesData)
      const radiiTitles = this.getRadiiTitles(radiiData)
      const serviceTitles = this.getServiceTitles(servicesData)

      await this.telegramClient.sendMessage(ctx, 'start conversation')

      // TODO create createConversation method on adapter
      const conversation = await this.telegramClient.createConversation(ctx)
      // console.log(conversation)

      // TODO keyboard with cancel button
      await this.telegramClient.sendMessageWithMarkup(ctx, 'kuzov auto quesiton*', [
        ...carBodyTitles,
        CANCEL_APPOINTMENT_BUTTON_TEXT,
      ])

      // TODO check interfaces
      await conversation.wait('msg.text', ({ message }) => {
        const { text: responseText } = message

        // TODO switch case
        if (responseText === CANCEL_APPOINTMENT_BUTTON_TEXT || responseText === '/cancel') {
          console.log('cancel conversation')
        } else if (carBodyTitles.includes(responseText)) {
          conversationData.carBodyTitle = responseText
          return true
        }

        message.reply('Выберите ответ на клавиатуре, либо нажмите /cancel, чтобы отменить запись')
        return false
      })

      // TODO keyboard with cancel button
      await this.telegramClient.sendMessageWithMarkup(ctx, 'diameter coles*', [
        ...radiiTitles,
        CANCEL_APPOINTMENT_BUTTON_TEXT,
      ])

      await conversation.wait('msg.text', ({ message }) => {
        const { text: responseText } = message

        // TODO switch case
        if (responseText === CANCEL_APPOINTMENT_BUTTON_TEXT || responseText === '/cancel') {
          console.log('cancel conversation')
        } else if (radiiTitles.includes(responseText)) {
          conversationData.radiiTitle = responseText
          return true
        }

        message.reply('Выберите ответ на клавиатуре, либо нажмите /cancel, чтобы отменить запись')
        return false
      })

      await this.telegramClient.sendMessageWithMarkup(ctx, 'tip remonta*', [
        ...serviceTitles,
        CANCEL_APPOINTMENT_BUTTON_TEXT,
      ])

      await conversation.wait('msg.text', ({ message }) => {
        const { text: responseText } = message

        // TODO switch case
        if (responseText === CANCEL_APPOINTMENT_BUTTON_TEXT || responseText === '/cancel') {
          console.log('cancel conversation')
        } else if (serviceTitles.includes(responseText)) {
          conversationData.serviceTitle = responseText
          return true
        }

        message.reply('Выберите ответ на клавиатуре, либо нажмите /cancel, чтобы отменить запись')
        return false
      })

      await this.telegramClient.sendMessageWithMarkup(ctx, 'commentary*', [
        CONTINUE_WITHOUT_COMMENTARY_BUTTON_TEXT,
        CANCEL_APPOINTMENT_BUTTON_TEXT,
      ])

      await conversation.wait('msg.text', ({ message }) => {
        const { text: responseText } = message

        // TODO switch case
        if (responseText === CANCEL_APPOINTMENT_BUTTON_TEXT || responseText === '/cancel') {
          console.log('cancel conversation')
        } else if (responseText === CONTINUE_WITHOUT_COMMENTARY_BUTTON_TEXT) {
          console.log('continue without commentary')
          return true
        }

        conversationData.commentary = responseText
        return true
      })

      const { carBodyTitle, radiiTitle, serviceTitle, commentary } = conversationData

      let approvalMessage = ''
      approvalMessage += `Тип кузова: ${carBodyTitle}\n`
      approvalMessage += `Диаметр колёс: ${radiiTitle}\n`
      approvalMessage += `Тип ремонта: ${serviceTitle}\n`
      if (commentary) approvalMessage += `Комментарий: ${commentary}`

      await this.telegramClient.sendMessage(ctx, approvalMessage)

      // TODO Q: name? - save it from context
      // TODO Q: phone? - есть кнопка в telegram api - типо поделиться контактом - сделать опциональной

      // TODO approve with keyboard
      await this.telegramClient.sendMessage(
        ctx,
        'предложение согласовать отменить или перенести запись'
      )
      await this.telegramClient.sendMessage(ctx, 'ссылки на оператора (другой чат)')

      this.telegramClient.removeConversation(ctx)
    } catch (error) {
      // TODO что за класс Logger
      // если он пишет логи, то в случае ошибок нужно использовать его
      console.error(error)

      // TODO more details on error???
      await this.telegramClient.sendMessage(ctx, 'На сервере произошла ошибка')
    }
  }
}
