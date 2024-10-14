import type { TelegramBotFormattedContextType } from '@booking-telegram-bot/tgsnake-adapter'
import type { CreateConversationReturnType }    from '@booking-telegram-bot/tgsnake-adapter'
import type { TgsnakeContextType }              from '@booking-telegram-bot/tgsnake-adapter'
import type { TgsnakeAdapterService }           from '@booking-telegram-bot/tgsnake-adapter'

import { getFormattedContextGetter }            from '../getters/index.js'

const createConversaionUseCase = (
  tgsnakeClient: TgsnakeAdapterService,
  ctx: TelegramBotFormattedContextType
): CreateConversationReturnType => {
  const { chatId } = ctx

  const conversation = tgsnakeClient.conversation.create(chatId)

  return {
    data: {},
    waitMessage: async (callback) =>
      conversation.wait('msg.text', (conversationCtx: TgsnakeContextType) => {
        const formattedContext = getFormattedContextGetter(tgsnakeClient, conversationCtx)
        return callback(formattedContext)
      }),
  }
}

export { createConversaionUseCase }
