import type { TgsnakeAdapterService } from '../services/tgsnake-adapter.service.js'

const checkChatConversationUseCase = (
  tgsnakeClient: TgsnakeAdapterService,
  chatId: bigint
): boolean => {
  const { conversation } = tgsnakeClient.conversation as unknown as {
    conversation: Map<bigint, any>
  }

  if (conversation.get(chatId)) {
    return true
  }
  return false
}

export { checkChatConversationUseCase }
