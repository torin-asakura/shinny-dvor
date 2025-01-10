export type TelegramBotFormattedContextType = {
  userId: bigint
  userFirstName: string
  userLastName?: string
  messageText: string
  accessHash: bigint
  messageId: number
  chatId: bigint
}

export type CreateConversationReturnType = {
  data: object
  waitMessage: (callback: (ctx: TelegramBotFormattedContextType) => boolean) => Promise<object>
}
