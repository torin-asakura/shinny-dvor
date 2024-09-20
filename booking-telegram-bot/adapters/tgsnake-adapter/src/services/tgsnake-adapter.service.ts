import crypto             from 'node:crypto'

import { Injectable }     from '@nestjs/common'

import { Snake }          from 'tgsnake'
import { Raw }            from 'tgsnake'

import { TGSHAKE_CONFIG } from '../config/index.js'

// TODO all text to locales
// check migration bot maybe

@Injectable()
export class TgsnakeAdapterService extends Snake {
  constructor() {
    super(TGSHAKE_CONFIG)
    this.run()
  }

  async listenMessage() {
    // TODO interfaces
    const reply = async (ctx, text) => {
      return await ctx.message.reply(text)
    }

    const sendMessage = async (ctx, text) => {
      const { from: userMessage } = ctx.message

      const { id: userId } = userMessage
      const { accessHash } = userMessage

      // TODO to globals
      const randomHex = crypto.randomBytes(4).toString('hex')
      const randomBigInt = BigInt(parseInt(randomHex, 16))

      ctx.api.invoke(
        new Raw.messages.SendMessage({
          message: text,
          peer: new Raw.InputPeerUser({ userId, accessHash }),
          randomId: randomBigInt,
        })
      )
    }

    const removeConversation = async (ctx) => {
      this.conversation.remove(ctx.message.chat.id)
    }

    const runConversationA1 = async (ctx) => {
      const conversation = this.conversation.create(ctx.message.chat.id)
      await sendMessage(ctx, 'start conversation')

      // TODO Q: name? - save it from context
      // TODO Q: phone? - есть кнопка в telegram api - типо поделиться контактом - сделать опциональной

      // TODO keyboard with cancel button
      await sendMessage(ctx, 'kuzov auto quesiton*')

      // TODO R: check response
      const response1 = await conversation.wait('msg.text', ({ message }) => {
        if (message.text.toLowerCase() === 'b') {
          return true
        }
        message.reply('Input B')
        return false
      })

      // TODO keyboard with cancel button
      await sendMessage(ctx, 'diameter coles*')

      // TODO R: check response
      const response2 = await conversation.wait('msg.text', (update) => {
        if (update.message.text.toLowerCase() === 'b') {
          return true
        }
        update.message.reply('Input B')
        return false
      })

      // TODO keyboard with cancel button
      await sendMessage(ctx, 'tip remonta*')

      // TODO R: check response
      const response3 = await conversation.wait('msg.text', (update) => {
        if (update.message.text.toLowerCase() === 'b') {
          return true
        }
        update.message.reply('Input B')
        return false
      })

      // TODO keyboard with cancel and skip button
      await sendMessage(ctx, 'commentary*')

      // TODO R: check response
      const response4 = await conversation.wait('msg.text', (update) => {
        if (update.message.text.toLowerCase() === 'b') {
          return true
        }
        update.message.reply('Input B')
        return false
      })

      await sendMessage(ctx, 'done')
      await sendMessage(ctx, 'предложение отменить или перенести запись')
      await sendMessage(ctx, 'ссылки на оператора (другой чат)')

      removeConversation(ctx)
    }

    this.cmd('start', async (ctx) => {
      removeConversation(ctx)
      await reply(ctx, 'welcome message')
      await runConversationA1(ctx)
    })

    this.cmd('help', async (ctx) => {
      await reply(ctx, 'command help')
    })

    this.on('msg.text', async (ctx) => {
      if (!this.conversation?.conversation?.size) {
        await runConversationA1(ctx)
      }
    })
  }
}
