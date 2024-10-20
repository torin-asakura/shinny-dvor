import type { TelegramBotFormattedContextKeyType } from '@booking-telegram-bot/tgsnake-adapter'
import type { TelegramBotFormattedContextType }    from '@booking-telegram-bot/tgsnake-adapter'

import { TgsnakeAdapterError }                     from '@booking-telegram-bot/tgsnake-adapter'

const checkFormattedContextHelper = (
  formattedContext: Record<TelegramBotFormattedContextKeyType, any>
): TelegramBotFormattedContextType => {
  const formattedContextKeys = Object.keys(formattedContext)
  for (const contextKey of formattedContextKeys) {
    if (!formattedContext[contextKey as TelegramBotFormattedContextKeyType]) {
      throw new TgsnakeAdapterError(`cannot access ${contextKey}`)
    }
  }
  return formattedContext
}

export { checkFormattedContextHelper }
