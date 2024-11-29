import type { TgsnakeContextType }              from '../interfaces/index.js'
import type { TelegramBotFormattedContextType } from '../interfaces/index.js'

import { checkFormattedContextHelper }          from '../helpers/index.js'

export const getFormattedCallbackQueryContext = (
  ctx: TgsnakeContextType
): TelegramBotFormattedContextType => {
  const formattedContext: Record<string, any> = {
    callbackData: ctx.callbackQuery?.data,
    userId: ctx.callbackQuery?.from?.id,
    // userFirstName: ctx.callbackQuery?.from?.firstname,
    // userLastName: ctx.callbackQuery?.from?.lastname,
    // messageText: ctx.callbackQuery?.text,
    accessHash: ctx.callbackQuery?.from?.accessHash,
    messageId: ctx.callbackQuery?.message?.id,
    // chatId: ctx.callbackQuery?.chat?.id,
  }

  const formattedContextChecked = checkFormattedContextHelper(formattedContext)
  return formattedContextChecked
}
