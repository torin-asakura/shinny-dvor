import type { Provider }          from '@nestjs/common'

import { TelegramClientPort }     from '@operator-bot/telegram-bot-context_application-module'

import * as processors            from '../processors/index.js'
import { TelegramClientPortImpl } from '../ports/index.js'

export const telegramBotProviders: Array<Provider> = [
  {
    provide: TelegramClientPort,
    useClass: TelegramClientPortImpl,
  },
  ...Object.values(processors),
]
