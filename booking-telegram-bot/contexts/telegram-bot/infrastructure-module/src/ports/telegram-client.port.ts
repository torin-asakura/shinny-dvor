import type { CreateConversationReturnType }    from '@booking-telegram-bot/tgsnake-adapter'
import type { TelegramBotFormattedContextType } from '@booking-telegram-bot/tgsnake-adapter'
import type { TelegramClientPort }              from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { SendMessageUseCase }                   from '@booking-telegram-bot/tgsnake-adapter'
import { SendMessageWithMarkupUseCase }         from '@booking-telegram-bot/tgsnake-adapter'
import { CreateConversationUseCase }            from '@booking-telegram-bot/tgsnake-adapter'
import { RemoveConversationUseCase }            from '@booking-telegram-bot/tgsnake-adapter'
import { CheckChatConversationUseCase }         from '@booking-telegram-bot/tgsnake-adapter'
import { ReplyMessageUseCase }                  from '@booking-telegram-bot/tgsnake-adapter'
import { GetRuLocaleUseCase }                   from '@booking-telegram-bot/tgsnake-adapter'

@Injectable()
export class TelegramClientPortImpl implements TelegramClientPort {
  constructor(
    private readonly sendMessageUseCase: SendMessageUseCase,
    private readonly sendMessageWithMarkupUseCase: SendMessageWithMarkupUseCase,
    private readonly replyMessageUseCase: ReplyMessageUseCase,
    private readonly createConversationUseCase: CreateConversationUseCase,
    private readonly removeConversationUseCase: RemoveConversationUseCase,
    private readonly checkChatConversationUseCase: CheckChatConversationUseCase,
    private readonly getRuLocaleUseCase: GetRuLocaleUseCase
  ) {}

  get ruLocale(): Record<string, string> {
    return this.getRuLocaleUseCase.process()
  }

  async sendMessage(ctx: TelegramBotFormattedContextType, text: string): Promise<void> {
    return this.sendMessageUseCase.process(ctx, text)
  }

  async sendMessageWithMarkup(
    ctx: TelegramBotFormattedContextType,
    text: string,
    buttonsText: Array<string>
  ): Promise<void> {
    return this.sendMessageWithMarkupUseCase.process(ctx, text, buttonsText)
  }

  async replyMessage(ctx: TelegramBotFormattedContextType, text: string): Promise<void> {
    return this.replyMessageUseCase.process(ctx, text)
  }

  createConversation(ctx: TelegramBotFormattedContextType): CreateConversationReturnType {
    return this.createConversationUseCase.process(ctx)
  }

  removeConversation(chatId: bigint): void {
    this.removeConversationUseCase.process(chatId)
  }

  checkChatConversation(chatId: bigint): boolean {
    return this.checkChatConversationUseCase.process(chatId)
  }
}
