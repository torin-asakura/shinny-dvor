import type { TelegramBotFormattedContextType } from '@booking-telegram-bot/tgsnake-adapter'

import { Injectable }                           from '@nestjs/common'
import { Raw }                                  from 'tgsnake'

import { TgsnakeAdapterService }                from '../services/index.js'
import { getRandomBigIntGetter }                from '../getters/index.js'

@Injectable()
class SendMessageUseCase {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  async process(ctx: TelegramBotFormattedContextType, text: string): Promise<void> {
    const { userId } = ctx
    const { accessHash } = ctx

    const randomBigInt = getRandomBigIntGetter()

    await this.tgsnakeAdapterService.api.invoke(
      new Raw.messages.SendMessage({
        message: text,
        peer: new Raw.InputPeerUser({ userId, accessHash }),
        randomId: randomBigInt,
      })
    )
  }
}

export { SendMessageUseCase }
