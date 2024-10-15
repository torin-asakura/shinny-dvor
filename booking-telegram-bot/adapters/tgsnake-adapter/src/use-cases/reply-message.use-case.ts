import type { TelegramBotFormattedContextType } from '@booking-telegram-bot/tgsnake-adapter'

import { Injectable }                           from '@nestjs/common'
import { Raw }                                  from 'tgsnake'

import { TgsnakeAdapterService }                from '../services/index.js'
import { getRandomBigIntGetter }                from '../getters/get-random-big-int.getter.js'

@Injectable()
class ReplyMessageUseCase {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  async process(ctx: TelegramBotFormattedContextType, text: string): Promise<void> {
    const { userId, accessHash, messageId } = ctx

    const randomBigInt = getRandomBigIntGetter()

    await this.tgsnakeAdapterService.api.invoke(
      new Raw.messages.SendMessage({
        message: text,
        peer: new Raw.InputPeerUser({ userId, accessHash }),
        replyTo: new Raw.InputReplyToMessage({ replyToMsgId: messageId }),
        randomId: randomBigInt,
      })
    )
  }
}

export { ReplyMessageUseCase }
