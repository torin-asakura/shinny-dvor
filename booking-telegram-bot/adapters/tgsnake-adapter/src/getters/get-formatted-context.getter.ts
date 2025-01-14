import type { TelegramBotFormattedContextKeyType } from '@booking-telegram-bot/tgsnake-adapter'
import type { TgsnakeContextType }                 from '@booking-telegram-bot/tgsnake-adapter'
import type { TelegramBotFormattedContextType }    from '@booking-telegram-bot/tgsnake-adapter'

import { checkFormattedContextHelper }             from '../helpers/index.js'

const getFormattedContextGetter = (ctx: TgsnakeContextType): TelegramBotFormattedContextType => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formattedContext: Record<TelegramBotFormattedContextKeyType, any> = {
    userId: ctx.message?.from?.id,
    userFirstName: ctx.message?.from?.firstname,
    userLastName: ctx.message?.from?.lastname,
    messageText: ctx.message?.text,
    accessHash: ctx.message?.from?.accessHash,
    messageId: ctx.message?.id,
    chatId: ctx.message?.chat?.id,
  }

  const formattedContextChecked = checkFormattedContextHelper(formattedContext)
  return formattedContextChecked
}

export { getFormattedContextGetter }
