import type { CallbackType }         from '../interfaces/index.js'
import type { OnCommandReturnType }  from '../interfaces/index.js'

import { Injectable }                from '@nestjs/common'

import { TgsnakeAdapterService }     from './index.js'
import { getFormattedContextGetter } from '../getters/index.js'

@Injectable()
class OnTgsnakeCommandService {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  process(command: string, callback: CallbackType): OnCommandReturnType {
    return this.tgsnakeAdapterService.cmd(command, async (ctx) => {
      const formattedContext = getFormattedContextGetter(ctx)
      return callback(formattedContext)
    })
  }
}

export { OnTgsnakeCommandService }
