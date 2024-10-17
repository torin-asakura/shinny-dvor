import type { CallbackType }         from '@booking-telegram-bot/tgsnake-adapter'
import type { OnCommandReturnType }  from '@booking-telegram-bot/tgsnake-adapter'

import { Injectable }                from '@nestjs/common'

import { TgsnakeAdapterService }     from './index.js'
import { getFormattedContextGetter } from '../getters/index.js'

@Injectable()
class OnCommandService {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  process(command: string, callback: CallbackType): OnCommandReturnType {
    return this.tgsnakeAdapterService.cmd(command, async (ctx) => {
      const formattedContext = getFormattedContextGetter(ctx)
      return callback(formattedContext)
    })
  }
}

export { OnCommandService }
