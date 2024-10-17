import type { TelegramBotFormattedContextType } from '@booking-telegram-bot/tgsnake-adapter'
import type { TgsnakeContextType }              from '@booking-telegram-bot/tgsnake-adapter'
import type { CreateConversationReturnType }    from '@booking-telegram-bot/tgsnake-adapter'

import { Injectable }                           from '@nestjs/common'

import { TgsnakeAdapterService }                from './index.js'
import { getFormattedContextGetter }            from '../getters/index.js'

@Injectable()
class CreateConversationService {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  process(ctx: TelegramBotFormattedContextType): CreateConversationReturnType {
    const { chatId } = ctx

    const conversation = this.tgsnakeAdapterService.conversation.create(chatId)

    return {
      data: {},
      waitMessage: async (callback) =>
        conversation.wait('msg.text', (conversationCtx: TgsnakeContextType) => {
          const formattedContext = getFormattedContextGetter(conversationCtx)
          return callback(formattedContext)
        }),
    }
  }
}

export { CreateConversationService }
