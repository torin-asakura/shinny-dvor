import { Injectable }          from '@nestjs/common'

import { GET_CAR_BODIES }      from '@globals/data'
import { GET_AVAILABLE_RADII } from '@globals/data'
import { GET_SERVICES }        from '@globals/data'
import { RunQueryUseCase }     from '@graphql-client/application-module'
import { checkArrayLength }    from '@globals/data'

import { TelegramClientPort }  from '../ports/index.js'

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
      // TODO есть функции, которые мы используем, напрмер в `@site`
      // для того, чтобы вытащить необходимые данные их приходящей `queryData`
      // используй эти функции здесь тоже
      // может быть их нужно будет переместить в `@globals`

      const carBodiesData = await this.getCarBodiesData()
      const radiiData = await this.getRadiiData()
      const servicesData = await this.getServicesData()

      const carBodyTitles = this.getCarBodyTitles(carBodiesData)
      const radiiTitles = this.getRadiiTitles(radiiData)
      const serviceTitles = this.getServiceTitles(servicesData)
      console.log(radiiTitles)
      console.log(serviceTitles)

      await this.telegramClient.sendMessage(ctx, 'start conversation')

      // TODO create createConversation method on adapter
      const conversation = await this.telegramClient.createConversation(ctx)
      console.log(conversation)

      // TODO Q: name? - save it from context
      // TODO Q: phone? - есть кнопка в telegram api - типо поделиться контактом - сделать опциональной

      // TODO keyboard with cancel button
      await this.telegramClient.sendMessage(ctx, 'kuzov auto quesiton*')

      // TODO R: check response
      const response1 = await conversation.wait('msg.text', ({ message }) => {
        if (message.text.toLowerCase() === 'b') {
          return true
        }
        message.reply('Input B')
        return false
      })

      // TODO keyboard with cancel button
      await this.telegramClient.sendMessage(ctx, 'diameter coles*')

      // TODO R: check response
      const response2 = await conversation.wait('msg.text', (update) => {
        if (update.message.text.toLowerCase() === 'b') {
          return true
        }
        update.message.reply('Input B')
        return false
      })

      // TODO keyboard with cancel button
      await this.telegramClient.sendMessage(ctx, 'tip remonta*')

      // TODO R: check response
      const response3 = await conversation.wait('msg.text', (update) => {
        if (update.message.text.toLowerCase() === 'b') {
          return true
        }
        update.message.reply('Input B')
        return false
      })

      // TODO keyboard with cancel and skip button
      await this.telegramClient.sendMessage(ctx, 'commentary*')

      // TODO R: check response
      const response4 = await conversation.wait('msg.text', (update) => {
        if (update.message.text.toLowerCase() === 'b') {
          return true
        }
        update.message.reply('Input B')
        return false
      })

      await this.telegramClient.sendMessage(ctx, 'done')
      await this.telegramClient.sendMessage(ctx, 'предложение отменить или перенести запись')
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
