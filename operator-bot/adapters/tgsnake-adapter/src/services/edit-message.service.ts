import type { TelegramBotFormattedContextType } from '../interfaces/index.js'

import { Injectable }                           from '@nestjs/common'
import { Raw }                                  from 'tgsnake'

import { TgsnakeAdapterService }                from './index.js'
import { getRandomBigIntGetter }                from '../getters/index.js'

@Injectable()
export class EditMessageService {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  async process(ctx: TelegramBotFormattedContextType, text: string): Promise<void> {
    const { userId } = ctx
    const { accessHash } = ctx
    const { messageId } = ctx

    await this.tgsnakeAdapterService.api.invoke(
      new Raw.messages.EditMessage({
        message: text,
        id: messageId,
        peer: new Raw.InputPeerUser({ userId, accessHash }),
      })
    )
  }
}
