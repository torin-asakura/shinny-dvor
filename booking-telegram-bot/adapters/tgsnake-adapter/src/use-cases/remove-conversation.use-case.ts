import type { TgsnakeAdapterService } from '@booking-telegram-bot/tgsnake-adapter'

const removeConversationUseCase = (tgsnakeClient: TgsnakeAdapterService, chatId: bigint): void => {
  tgsnakeClient.conversation.remove(chatId)
}

export { removeConversationUseCase }
