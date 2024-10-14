import type { CallbackType }          from '@booking-telegram-bot/tgsnake-adapter'
import type { TgsnakeAdapterService } from '@booking-telegram-bot/tgsnake-adapter'
import type { OnMessageReturnType }   from '@booking-telegram-bot/tgsnake-adapter'

import { getFormattedContextGetter }  from '../getters/get-formatted-context.getter.js'

const onMessageUseCase = (
  tgsnakeClient: TgsnakeAdapterService,
  callback: CallbackType
): OnMessageReturnType =>
  tgsnakeClient.on('msg.text', async (ctx) => {
    const formattedContext = getFormattedContextGetter(tgsnakeClient, ctx)
    return callback(formattedContext)
  })

export { onMessageUseCase }
