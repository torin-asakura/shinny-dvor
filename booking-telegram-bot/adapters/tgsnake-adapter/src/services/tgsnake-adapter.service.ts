import crypto             from 'node:crypto'

import { Injectable }     from '@nestjs/common'

import { Snake }          from 'tgsnake'
import { Raw }            from 'tgsnake'

import { TGSHAKE_CONFIG } from '../config/index.js'

// TODO all text to locales
// check migration bot maybe

@Injectable()
export class TgsnakeAdapterService extends Snake {
  // TODO types
  constructor() {
    super(TGSHAKE_CONFIG)
    this.run()
  }

  private getRandomBigInt() {
    const randomHex = crypto.randomBytes(4).toString('hex')
    const randomBigInt = BigInt(parseInt(randomHex, 16))
    return randomBigInt
  }

  // TODO types
  async reply(ctx: any, text: string) {
    return await ctx.message.reply(text)
  }

  async sendMessage(ctx: any, text: string) {
    const { from: userMessage } = ctx.message

    const { id: userId } = userMessage
    const { accessHash } = userMessage

    const randomBigInt = this.getRandomBigInt()

    return await ctx.api.invoke(
      new Raw.messages.SendMessage({
        message: text,
        peer: new Raw.InputPeerUser({ userId, accessHash }),
        randomId: randomBigInt,
      })
    )
  }

  async sendMessageWithMarkup(ctx: any, text: string, buttonsText: Array<string>) {
    const { from: userMessage } = ctx.message

    const { id: userId } = userMessage
    const { accessHash } = userMessage

    const randomBigInt = this.getRandomBigInt()

    const rows = buttonsText.map(
      (text) =>
        new Raw.KeyboardButtonRow({
          buttons: [new Raw.KeyboardButton({ text })],
        })
    )

    const replyMarkup = new Raw.ReplyKeyboardMarkup({
      rows,
    })

    // TODO keyboardmarkup to const
    return await ctx.api.invoke(
      new Raw.messages.SendMessage({
        message: text,
        peer: new Raw.InputPeerUser({ userId, accessHash }),
        replyMarkup,
        randomId: randomBigInt,
      })
    )
  }

  // TODO interface
  async createConversation(ctx: any) {
    return this.conversation.create(ctx.message.chat.id)
  }

  // TODO interface
  async removeConversation(ctx: any) {
    this.conversation.remove(ctx.message.chat.id)
  }
}
