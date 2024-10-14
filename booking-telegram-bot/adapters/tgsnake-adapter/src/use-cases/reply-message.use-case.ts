import type { TelegramBotFormattedContextType } from '@booking-telegram-bot/tgsnake-adapter'
import type { TgsnakeAdapterService }           from '@booking-telegram-bot/tgsnake-adapter'

import { Raw }                                  from 'tgsnake'

import { getRandomBigIntGetter }                from '../getters/get-random-big-int.getter.js'

const replyMessageUseCase = async (
  tgsnakeClient: TgsnakeAdapterService,
  ctx: TelegramBotFormattedContextType,
  text: string
): Promise<void> => {
  const { userId, accessHash, messageId } = ctx

  const randomBigInt = getRandomBigIntGetter()

  await tgsnakeClient.api.invoke(
    new Raw.messages.SendMessage({
      message: text,
      peer: new Raw.InputPeerUser({ userId, accessHash }),
      replyTo: new Raw.InputReplyToMessage({ replyToMsgId: messageId }),
      randomId: randomBigInt,
    })
  )
}

export { replyMessageUseCase }
