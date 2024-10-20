import type { CreateConversationReturnType }    from '@booking-telegram-bot/tgsnake-adapter'
import type { TelegramBotFormattedContextType } from '@booking-telegram-bot/tgsnake-adapter'
import type { TelegramClientPort }              from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { SendMessageService }                   from '@booking-telegram-bot/tgsnake-adapter'
import { SendMessageWithMarkupService }         from '@booking-telegram-bot/tgsnake-adapter'
import { CreateConversationService }            from '@booking-telegram-bot/tgsnake-adapter'
import { RemoveConversationService }            from '@booking-telegram-bot/tgsnake-adapter'
import { CheckChatConversationService }         from '@booking-telegram-bot/tgsnake-adapter'
import { ReplyMessageService }                  from '@booking-telegram-bot/tgsnake-adapter'
import { GetRuLocaleService }                   from '@booking-telegram-bot/tgsnake-adapter'

@Injectable()
export class TelegramClientPortImpl implements TelegramClientPort {
  constructor(
    private readonly sendMessageUseCase: SendMessageService,
    private readonly sendMessageWithMarkupUseCase: SendMessageWithMarkupService,
    private readonly replyMessageUseCase: ReplyMessageService,
    private readonly createConversationUseCase: CreateConversationService,
    private readonly removeConversationUseCase: RemoveConversationService,
    private readonly checkChatConversationUseCase: CheckChatConversationService,
    private readonly getRuLocaleUseCase: GetRuLocaleService
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
