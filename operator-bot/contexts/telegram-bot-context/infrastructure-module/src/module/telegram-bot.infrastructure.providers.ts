import type { Provider }          from '@nestjs/common'

import { I18nPort }               from '@operator-bot/telegram-bot-context_application-module'
import { TelegramClientPort }     from '@operator-bot/telegram-bot-context_application-module'

import * as processors            from '../processors/index.js'
import { I18nPortImpl }           from '../ports/index.js'
import { TelegramClientPortImpl } from '../ports/index.js'

export const telegramBotProviders: Array<Provider> = [
  {
    provide: TelegramClientPort,
    useClass: TelegramClientPortImpl,
  },
  {
    provide: I18nPort,
    useClass: I18nPortImpl,
  },
  ...Object.values(processors),
]
