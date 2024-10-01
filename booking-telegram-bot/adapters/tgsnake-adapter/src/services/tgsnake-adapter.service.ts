import crypto                                   from 'node:crypto'

import type { CallbackType }                    from './tgsnake-adapter.interfaces.js'
import type { TgsnakeContextType }              from './tgsnake-adapter.interfaces.js'
import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'

import { Injectable }                           from '@nestjs/common'

import { Snake }                                from 'tgsnake'
import { Raw }                                  from 'tgsnake'

import { TGSHAKE_CONFIG }                       from '../config/index.js'

// TODO all text to locales
// check migration bot maybe

@Injectable()
export class TgsnakeAdapterService extends Snake {
  // TODO types
  constructor() {
    super(TGSHAKE_CONFIG)
    this.run()
  }

  // какие свойства у контекста мне нужны?
  // этот тип нужно написать на уровне infrastructure

  private getFormattedContext(ctx: TgsnakeContextType): TelegramBotFormattedContextType {
    console.log(ctx)

    // TODO move it to private checks
    // maybe down it on send message level
    if (!ctx.message?.from?.id) throw new Error('cannot acces userId')
    if (!ctx.message?.from?.accessHash) throw new Error('cannot access accessHash')

    return {
      userId: ctx.message?.from?.id,
      accessHash: ctx.message?.from?.accessHash,
      messageId: 1234,
    }
  }

  onMessage(callback: CallbackType) {
    return this.on('msg.text', (ctx) => {
      const formattedContext = this.getFormattedContext(ctx)
      return callback(formattedContext)
    })
  }

  onCommand(command: string, callback: CallbackType) {
    return this.cmd(command, (ctx) => {
      const formattedContext = this.getFormattedContext(ctx)
      return callback(formattedContext)
    })
  }

  private getRandomBigInt() {
    const randomHex = crypto.randomBytes(4).toString('hex')
    const randomBigInt = BigInt(parseInt(randomHex, 16))
    return randomBigInt
  }

  // // TODO types
  // async reply(ctx: any, text: string) {
  //   return await ctx.message.reply(text)
  // }

  async sendMessage(ctx: TelegramBotFormattedContextType, text: string) {
    // TODO зачем ты пересобираешь контекст?
    // контекст как-то разбирается/переиспользуется на уровне выше?
    // - если да - то пересобирай, это будет верно.

    const { userId } = ctx
    const { accessHash } = ctx

    const randomBigInt = this.getRandomBigInt()

    return await this.api.invoke(
      new Raw.messages.SendMessage({
        message: text,
        peer: new Raw.InputPeerUser({ userId, accessHash }),
        randomId: randomBigInt,
      })
    )
  }

  // async sendMessageWithMarkup(ctx: any, text: string, buttons: Array<string | Array<any>>) {
  //   const { from: userMessage } = ctx.message
  //
  //   const { id: userId } = userMessage
  //   const { accessHash } = userMessage
  //
  //   const randomBigInt = this.getRandomBigInt()
  //
  //   const rows = []
  //
  //   for (const rowButton of buttons) {
  //     if (typeof rowButton === 'object') {
  //       const row = []
  //       for (const columnButon of rowButton) {
  //         row.push(new Raw.KeyboardButton({ text: columnButon }))
  //       }
  //       rows.push(
  //         new Raw.KeyboardButtonRow({
  //           buttons: row,
  //         })
  //       )
  //     } else {
  //       rows.push(
  //         new Raw.KeyboardButtonRow({
  //           buttons: [new Raw.KeyboardButton({ text: rowButton })],
  //         })
  //       )
  //     }
  //   }
  //
  //   const replyMarkup = new Raw.ReplyKeyboardMarkup({
  //     rows,
  //   })
  //
  //   // TODO keyboardmarkup to const
  //   return await ctx.api.invoke(
  //     new Raw.messages.SendMessage({
  //       message: text,
  //       peer: new Raw.InputPeerUser({ userId, accessHash }),
  //       replyMarkup,
  //       randomId: randomBigInt,
  //     })
  //   )
  // }
  //
  // // TODO interface
  // createConversation(ctx: any) {
  //   return this.conversation.create(ctx.message.chat.id)
  // }
  //
  // // TODO interface
  // removeConversation(ctx: any) {
  //   this.conversation.remove(ctx.message.chat.id)
  // }
}
