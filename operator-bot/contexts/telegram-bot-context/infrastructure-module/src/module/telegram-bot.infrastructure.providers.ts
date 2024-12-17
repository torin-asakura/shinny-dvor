import * as listeners             from '../listeners/index.js'
import * as processors            from '../processors/index.js'

import type { Provider }          from '@nestjs/common'

import { I18nPort }               from '@operator-bot/telegram-bot-application-module'
import { TelegramClientPort }     from '@operator-bot/telegram-bot-application-module'
import { FetchClientPort }        from '@operator-bot/telegram-bot-application-module'

import { I18nPortImpl }           from '../ports/index.js'
import { TelegramClientPortImpl } from '../ports/index.js'
import { FetchClientPortImpl }    from '../ports/index.js'

export const telegramBotProviders: Array<Provider> = [
  {
    provide: TelegramClientPort,
    useClass: TelegramClientPortImpl,
  },
  {
    provide: I18nPort,
    useClass: I18nPortImpl,
  },
  {
    provide: FetchClientPort,
    useClass: FetchClientPortImpl,
  },
  ...Object.values(processors),
  ...Object.values(listeners),
]
