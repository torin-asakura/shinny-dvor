type TelegramBotFormattedContextType = {
  userId: bigint
  userFirstName: string
  userLastName?: string
  messageText: string
  accessHash: bigint
  messageId: number
  chatId: bigint
  replyMessage: (text: string) => Promise<void>
}

type CreateConversationReturnType = {
  data: Record<string, any>
  waitMessage: (callback: (ctx: TelegramBotFormattedContextType) => boolean) => Promise<any>
}

export type { TelegramBotFormattedContextType }
export type { CreateConversationReturnType }
