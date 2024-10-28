import type { TelegramBotFormattedContextKeyType } from '../interfaces/index.js'
import type { TgsnakeContextType }                 from '../interfaces/index.js'
import type { TelegramBotFormattedContextType }    from '../interfaces/index.js'

import { checkFormattedContextHelper }             from '../helpers/index.js'

const getFormattedContextGetter = (ctx: TgsnakeContextType): TelegramBotFormattedContextType => {
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
