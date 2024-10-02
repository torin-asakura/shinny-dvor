import crypto                                      from 'node:crypto'

import type { CallbackType }                       from './tgsnake-adapter.interfaces.js'
import type { TgsnakeContextType }                 from './tgsnake-adapter.interfaces.js'
import type { TelegramBotFormattedContextType }    from '@telegram-bot/infrastructure-module'
import type { TelegramBotFormattedContextKeyType } from '@telegram-bot/infrastructure-module'

import { Injectable }                              from '@nestjs/common'

import { Snake }                                   from 'tgsnake'
import { Raw }                                     from 'tgsnake'

import { Conversation }                            from '../class/index.js'
import { TGSHAKE_CONFIG }                          from '../config/index.js'

// TODO all text to locales
// check migration bot maybe

@Injectable()
export class TgsnakeAdapterService extends Snake {
  // TODO types
  constructor() {
    super(TGSHAKE_CONFIG)
    this.run()
  }

  // TODO
  // какие свойства у контекста мне нужны?
  // этот тип нужно написать на уровне infrastructure
  private getFormattedContext(ctx: TgsnakeContextType): TelegramBotFormattedContextType {
    const formattedContext: Record<TelegramBotFormattedContextKeyType, any> = {
      userId: ctx.message?.from?.id,
      messageText: ctx.message?.text,
      accessHash: ctx.message?.from?.accessHash,
      messageId: ctx.message?.id,
      chatId: ctx.message?.chat?.id,
    }

    formattedContext.replyMessage = async (text: string) =>
      await this.replyMessage(text, formattedContext)

    const formattedContext_checked = this.checkFormattedContext(formattedContext)
    return formattedContext_checked
  }

  private async replyMessage(text, ctx: TelegramBotFormattedContextType) {
    const { userId, accessHash, messageId } = ctx

    const randomBigInt = this.getRandomBigInt()

    await this.api.invoke(
      new Raw.messages.SendMessage({
        message: text,
        peer: new Raw.InputPeerUser({ userId, accessHash }),
        replyTo: new Raw.InputReplyToMessage({ replyToMsgId: messageId }),
        randomId: randomBigInt,
      })
    )
    return
  }

  private checkFormattedContext(
    formattedContext: Record<TelegramBotFormattedContextKeyType, any>
  ): TelegramBotFormattedContextType {
    const formattedContextKeys = Object.keys(formattedContext)
    for (const contextKey of formattedContextKeys) {
      if (!formattedContext[contextKey as TelegramBotFormattedContextKeyType]) {
        throw new Error(`cannot acces ${contextKey}`)
      }
    }
    return formattedContext
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

  // TODO - что делает conversation?
  // TODO - просто ждет сообщение
  // TODO куда сохранятся все conversations?
  // как их удалить?
  createConversation(ctx: TelegramBotFormattedContextType) {
    const { chatId } = ctx

    const conversation = this.conversation.create(chatId)

    return {
      data: {},
      waitMessage: (callback: (ctx: TelegramBotFormattedContextType) => boolean) => {
        return conversation.wait('msg.text', (conversationCtx: TgsnakeContextType) => {
          const formattedContext = this.getFormattedContext(conversationCtx)
          return callback(formattedContext)
        })
      },
    }
  }

  removeConversation(chatId: bigint) {
    this.conversation.remove(chatId)
  }

  async sendMessageWithMarkup(
    ctx: TelegramBotFormattedContextType,
    text: string,
    buttons: Array<string | Array<any>>
  ) {
    const { userId } = ctx
    const { accessHash } = ctx

    const randomBigInt = this.getRandomBigInt()

    const rows = []

    for (const rowButton of buttons) {
      if (typeof rowButton === 'object') {
        const row = []
        for (const columnButon of rowButton) {
          row.push(new Raw.KeyboardButton({ text: columnButon }))
        }
        rows.push(
          new Raw.KeyboardButtonRow({
            buttons: row,
          })
        )
      } else {
        rows.push(
          new Raw.KeyboardButtonRow({
            buttons: [new Raw.KeyboardButton({ text: rowButton })],
          })
        )
      }
    }

    const replyMarkup = new Raw.ReplyKeyboardMarkup({
      rows,
    })

    // TODO keyboardmarkup to const
    return await this.api.invoke(
      new Raw.messages.SendMessage({
        message: text,
        peer: new Raw.InputPeerUser({ userId, accessHash }),
        replyMarkup,
        randomId: randomBigInt,
      })
    )
  }

  // // TODO interface
  // removeConversation(ctx: any) {
  //   this.conversation.remove(ctx.message.chat.id)
  // }
}
