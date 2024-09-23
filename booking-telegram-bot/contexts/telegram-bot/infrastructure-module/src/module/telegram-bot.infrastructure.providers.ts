import type { Provider }          from '@nestjs/common'

import { TelegramClientPort }     from '@telegram-bot/application-module'

import { TelegramClientPortImpl } from '../ports/index.js'
import { BotListenProcessor }     from '../processors/bot-listen.processor.js'

export const telegramBotProviders: Array<Provider> = [
  {
    provide: TelegramClientPort,
    useClass: TelegramClientPortImpl,
  },
  BotListenProcessor,
]
