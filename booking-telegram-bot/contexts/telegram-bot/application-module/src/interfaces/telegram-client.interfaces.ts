type TelegramBotFormattedContextType = {
  userId: bigint
  userFirstName: string
  userLastName?: string
  messageText: string
  accessHash: bigint
  messageId: number
  chatId: bigint
}

type CreateConversationReturnType = {
  data: Record<string, any>
  waitMessage: (callback: (ctx: TelegramBotFormattedContextType) => boolean) => Promise<any>
}

export type { TelegramBotFormattedContextType }
export type { CreateConversationReturnType }
