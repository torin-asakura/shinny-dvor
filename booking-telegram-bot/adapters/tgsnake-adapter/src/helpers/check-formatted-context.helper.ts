import type { TelegramBotFormattedContextType }    from '../interfaces/index.js'
import type { TelegramBotFormattedContextKeyType } from '../interfaces/index.js'

import { CheckFormattedContextHelperError }        from '../errors/index.js'

const checkFormattedContextHelper = (
  formattedContext: Record<TelegramBotFormattedContextKeyType, bigint & string>
): TelegramBotFormattedContextType => {
  const formattedContextKeys = Object.keys(formattedContext)
  for (const contextKey of formattedContextKeys) {
    if (!formattedContext[contextKey as TelegramBotFormattedContextKeyType]) {
      throw new CheckFormattedContextHelperError(`cannot access ${contextKey}`)
    }
  }
  return formattedContext
}

export { checkFormattedContextHelper }
