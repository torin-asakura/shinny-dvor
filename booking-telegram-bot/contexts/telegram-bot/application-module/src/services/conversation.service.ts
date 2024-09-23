import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../ports/index.js'

@Injectable()
export class ConversationService {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  // TODO inteface
  async process(ctx: any) {
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
  }
}
