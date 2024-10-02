type TelegramBotFormattedContextType = {
  userId: bigint
  accessHash: bigint
  messageId: number
  chatId: bigint
}

type TelegramBotFormattedContextKeyType = keyof TelegramBotFormattedContextType

export type { TelegramBotFormattedContextType }
export type { TelegramBotFormattedContextKeyType }
