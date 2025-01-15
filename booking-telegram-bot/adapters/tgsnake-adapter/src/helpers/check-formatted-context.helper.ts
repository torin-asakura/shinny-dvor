import type { TelegramBotFormattedContextType }    from '../interfaces/index.js'
import type { TelegramBotFormattedContextKeyType } from '../interfaces/index.js'

import { CheckFormattedContextHelperError }        from '../errors/index.js'

const checkFormattedContextHelper = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formattedContext: Record<TelegramBotFormattedContextKeyType, any>
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
