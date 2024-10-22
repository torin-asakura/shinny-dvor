import type { CallbackType }         from '../interfaces/index.js'
import type { OnMessageReturnType }  from '../interfaces/index.js'

import { Injectable }                from '@nestjs/common'

import { TGSNAKE_FILTER }            from '../constants/tgsnake-filter.constant.js'
import { TgsnakeAdapterService }     from './index.js'
import { getFormattedContextGetter } from '../getters/get-formatted-context.getter.js'

@Injectable()
class OnMessageService {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  process(callback: CallbackType): OnMessageReturnType {
    return this.tgsnakeAdapterService.on(TGSNAKE_FILTER.message, async (ctx) => {
      const formattedContext = getFormattedContextGetter(ctx)
      return callback(formattedContext)
    })
  }
}

export { OnMessageService }
