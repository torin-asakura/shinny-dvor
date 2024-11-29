import type { CallbackType }                from '../interfaces/index.js'
import type { OnCommandReturnType }         from '../interfaces/index.js'

import { Injectable }                       from '@nestjs/common'

import { TgsnakeAdapterService }            from './index.js'
import { getFormattedCallbackQueryContext } from '../getters/index.js'

@Injectable()
export class OnTgsnakeCallbackDataService {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  process(callback: CallbackType): OnCommandReturnType {
    return this.tgsnakeAdapterService.on('cb.data', async (ctx) => {
      const formattedContext = getFormattedCallbackQueryContext(ctx)
      return callback(formattedContext)
    })
  }
}
