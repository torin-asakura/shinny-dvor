import type { CallbackType }         from '@booking-telegram-bot/tgsnake-adapter'
import type { OnMessageReturnType }  from '@booking-telegram-bot/tgsnake-adapter'

import { Injectable }                from '@nestjs/common'

import { TgsnakeAdapterService }     from '../services/index.js'
import { getFormattedContextGetter } from '../getters/get-formatted-context.getter.js'

@Injectable()
class OnMessageUseCase {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  process(callback: CallbackType): OnMessageReturnType {
    return this.tgsnakeAdapterService.on('msg.text', async (ctx) => {
      const formattedContext = getFormattedContextGetter(ctx)
      return callback(formattedContext)
    })
  }
}

export { OnMessageUseCase }
