// eslint-disable @typescript-eslint/naming-convention

import type { TelegramBotFormattedContextType }    from '@booking-telegram-bot/tgsnake-adapter'
import type { TelegramBotFormattedContextKeyType } from '@booking-telegram-bot/tgsnake-adapter'
import type { OnCommandReturnType }                from '@booking-telegram-bot/tgsnake-adapter'
import type { OnMessageReturnType }                from '@booking-telegram-bot/tgsnake-adapter'
import type { CreateConversationReturnType }       from '@booking-telegram-bot/tgsnake-adapter'
import type { CallbackType }                       from '@booking-telegram-bot/tgsnake-adapter'
import type { TgsnakeContextType }                 from '@booking-telegram-bot/tgsnake-adapter'

import crypto                                      from 'node:crypto'

import { Injectable }                              from '@nestjs/common'
import { Snake }                                   from 'tgsnake'
import { Raw }                                     from 'tgsnake'

import { TGSHAKE_CONFIG }                          from '../config/index.js'

// TODO divide that class into smaller parts

@Injectable()
export class TgsnakeAdapterService extends Snake {
  constructor() {
    super(TGSHAKE_CONFIG)
    this.run()
  }

  onMessage(callback: CallbackType): OnMessageReturnType {
    return this.on('msg.text', async (ctx) => {
      const formattedContext = this.getFormattedContext(ctx)
      return callback(formattedContext)
    })
  }

  onCommand(command: string, callback: CallbackType): OnCommandReturnType {
    return this.cmd(command, async (ctx) => {
      const formattedContext = this.getFormattedContext(ctx)
      return callback(formattedContext)
    })
  }

  async sendMessage(ctx: TelegramBotFormattedContextType, text: string): Promise<void> {
    const { userId } = ctx
    const { accessHash } = ctx

    const randomBigInt = this.getRandomBigInt()

    await this.api.invoke(
      new Raw.messages.SendMessage({
        message: text,
        peer: new Raw.InputPeerUser({ userId, accessHash }),
        randomId: randomBigInt,
      })
    )
  }

  createConversation(ctx: TelegramBotFormattedContextType): CreateConversationReturnType {
    const { chatId } = ctx

    const conversation = this.conversation.create(chatId)

    return {
      data: {},
      waitMessage: async (callback) =>
        conversation.wait('msg.text', (conversationCtx: TgsnakeContextType) => {
          const formattedContext = this.getFormattedContext(conversationCtx)
          return callback(formattedContext)
        }),
    }
  }

  checkChatConversation(chatId: bigint): boolean {
    const { conversation } = this.conversation as unknown as { conversation: Map<bigint, any> }

    if (conversation.get(chatId)) {
      return true
    }
    return false
  }

  removeConversation(chatId: bigint): void {
    this.conversation.remove(chatId)
  }

  async sendMessageWithMarkup(
    ctx: TelegramBotFormattedContextType,
    text: string,
    buttons: Array<Array<string> | string>
  ): Promise<void> {
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

    await this.api.invoke(
      new Raw.messages.SendMessage({
        message: text,
        peer: new Raw.InputPeerUser({ userId, accessHash }),
        replyMarkup,
        randomId: randomBigInt,
      })
    )
  }

  private getRandomBigInt(): bigint {
    const randomHex = crypto.randomBytes(4).toString('hex')
    const randomBigInt = BigInt(parseInt(randomHex, 16))
    return randomBigInt
  }

  private getFormattedContext(ctx: TgsnakeContextType): TelegramBotFormattedContextType {
    const formattedContext: Record<TelegramBotFormattedContextKeyType, any> = {
      userId: ctx.message?.from?.id,
      userFirstName: ctx.message?.from?.firstname,
      userLastName: ctx.message?.from?.lastname,
      // userUsername: ctx.message?.from?.username,
      messageText: ctx.message?.text,
      accessHash: ctx.message?.from?.accessHash,
      messageId: ctx.message?.id,
      chatId: ctx.message?.chat?.id,
      replyMessage: async (text: string) => this.replyMessage(text, formattedContext),
    }

    const formattedContextChecked = this.checkFormattedContext(formattedContext)
    return formattedContextChecked
  }

  private async replyMessage(text: string, ctx: TelegramBotFormattedContextType): Promise<void> {
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
}
