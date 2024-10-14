// eslint-disable @typescript-eslint/naming-convention

import type { TelegramBotFormattedContextType } from '@booking-telegram-bot/tgsnake-adapter'
import type { OnCommandReturnType }             from '@booking-telegram-bot/tgsnake-adapter'
import type { OnMessageReturnType }             from '@booking-telegram-bot/tgsnake-adapter'
import type { CreateConversationReturnType }    from '@booking-telegram-bot/tgsnake-adapter'
import type { CallbackType }                    from '@booking-telegram-bot/tgsnake-adapter'

import { Injectable }                           from '@nestjs/common'
import { Snake }                                from 'tgsnake'

import { TGSHAKE_CONFIG }                       from '../config/index.js'
import { onMessageUseCase }                     from '../use-cases/index.js'
import { onCommandUseCase }                     from '../use-cases/index.js'
import { sendMessageUseCase }                   from '../use-cases/index.js'
import { createConversaionUseCase }             from '../use-cases/index.js'
import { checkChatConversationUseCase }         from '../use-cases/index.js'
import { removeConversationUseCase }            from '../use-cases/index.js'
import { sendMessageWithMarkupUseCase }         from '../use-cases/index.js'
import { replyMessageUseCase }                  from '../use-cases/index.js'

// TODO divide that class into smaller parts

@Injectable()
export class TgsnakeAdapterService extends Snake {
  constructor() {
    super(TGSHAKE_CONFIG)
    this.run()
  }

  onMessage(callback: CallbackType): OnMessageReturnType {
    return onMessageUseCase(this, callback)
  }

  onCommand(command: string, callback: CallbackType): OnCommandReturnType {
    return onCommandUseCase(this, command, callback)
  }

  async sendMessage(ctx: TelegramBotFormattedContextType, text: string): Promise<void> {
    return sendMessageUseCase(this, ctx, text)
  }

  createConversation(ctx: TelegramBotFormattedContextType): CreateConversationReturnType {
    return createConversaionUseCase(this, ctx)
  }

  checkChatConversation(chatId: bigint): boolean {
    return checkChatConversationUseCase(this, chatId)
  }

  removeConversation(chatId: bigint): void {
    removeConversationUseCase(this, chatId)
  }

  async sendMessageWithMarkup(
    ctx: TelegramBotFormattedContextType,
    text: string,
    buttons: Array<Array<string> | string>
  ): Promise<void> {
    return sendMessageWithMarkupUseCase(this, ctx, text, buttons)
  }

  async replyMessage(text: string, ctx: TelegramBotFormattedContextType): Promise<void> {
    return replyMessageUseCase(this, ctx, text)
  }
}
