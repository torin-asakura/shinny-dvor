import type { CallbackType }          from '@booking-telegram-bot/tgsnake-adapter'
import type { OnCommandReturnType }   from '@booking-telegram-bot/tgsnake-adapter'
import type { TgsnakeAdapterService } from '@booking-telegram-bot/tgsnake-adapter'

import { getFormattedContextGetter }  from '../getters/index.js'

const onCommandUseCase = (
  tgsnakeClient: TgsnakeAdapterService,
  command: string,
  callback: CallbackType
): OnCommandReturnType =>
  tgsnakeClient.cmd(command, async (ctx) => {
    const formattedContext = getFormattedContextGetter(tgsnakeClient, ctx)
    return callback(formattedContext)
  })

export { onCommandUseCase }
