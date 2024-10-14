import type { TelegramBotFormattedContextType } from '@booking-telegram-bot/tgsnake-adapter'
import type { TgsnakeAdapterService }           from '@booking-telegram-bot/tgsnake-adapter'

import { Raw }                                  from 'tgsnake'

import { getRandomBigIntGetter }                from '../getters/index.js'

const sendMessageUseCase = async (
  tgsnakeClient: TgsnakeAdapterService,
  ctx: TelegramBotFormattedContextType,
  text: string
): Promise<void> => {
  const { userId } = ctx
  const { accessHash } = ctx

  const randomBigInt = getRandomBigIntGetter()

  await tgsnakeClient.api.invoke(
    new Raw.messages.SendMessage({
      message: text,
      peer: new Raw.InputPeerUser({ userId, accessHash }),
      randomId: randomBigInt,
    })
  )
}

export { sendMessageUseCase }
