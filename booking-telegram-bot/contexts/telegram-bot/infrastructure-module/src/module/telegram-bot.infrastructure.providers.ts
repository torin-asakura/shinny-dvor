import type { Provider }                   from '@nestjs/common'

import { TelegramClientPort }              from '@telegram-bot/application-module'
import { I18nPort }                        from '@telegram-bot/application-module'
import { AppointmentEntityRepository }     from '@telegram-bot/application-module'

import * as processors                     from '../processors/index.js'
import { TelegramClientPortImpl }          from '../ports/index.js'
import { I18nPortImpl }                    from '../ports/index.js'
import { AppointmentEntityRepositoryImpl } from '../repositories/index.js'

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
    provide: AppointmentEntityRepository,
    useClass: AppointmentEntityRepositoryImpl,
  },
  ...Object.values(processors),
]
