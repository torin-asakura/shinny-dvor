import crypto             from 'node:crypto'
import { Injectable }     from '@nestjs/common'
import { Snake }          from 'tgsnake'

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

      // TODO to globals
      const randomHex = crypto.randomBytes(4).toString('hex')
      const randomBigInt = BigInt(parseInt(randomHex, 16))

    const runConversationA1 = async (ctx) => {
      await reply(ctx, 'start conversation')
      const conversation = this.conversation.create(ctx.message.chat.id)
      await reply(ctx, 'input a')

      // await reply(ctx, 'input kuzov (need to query. look at site form)')
      // await reply(ctx, 'answer with keyboard button')
      // await reply(ctx, 'with cancel button')
      // await reply(ctx, 'check correct answer')

      const response1 = await conversation.wait('msg.text')
      await reply(response1, 'input b')

      const response2 = await conversation.wait('msg.text', (update) => {
        if (update.message.text.toLowerCase() === 'b') {
          return true
        }
        update.message.reply('Input B')
        return false
      })

      response2.message.reply('Done')

      this.conversation.remove(ctx.message.chat.id)
    }

    this.cmd('start', async (ctx) => {
      // TODO remove any conversation, than:
      await reply(ctx, 'welcome message')
      await runConversationA1(ctx)
    })

    this.cmd('help', async (ctx) => {
      await reply(ctx, 'command help')
    })

    this.on('msg.text', async (ctx) => {
      if (!this.conversation.conversation.size) {
        await runConversationA1(ctx)
      }
    })
  }
}
