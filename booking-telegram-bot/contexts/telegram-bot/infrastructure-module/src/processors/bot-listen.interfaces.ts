type TelegramBotFormattedContextType = {
  userId: bigint
  messageText: string
  accessHash: bigint
  messageId: number
  chatId: bigint
  replyMessage: (test: string) => Promise<void>
}

type TelegramBotFormattedContextKeyType = keyof TelegramBotFormattedContextType

export type { TelegramBotFormattedContextType }
export type { TelegramBotFormattedContextKeyType }
