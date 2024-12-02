import type { TelegramBotFormattedContextType } from '../interfaces/index.js'

import { Injectable }                           from '@nestjs/common'

import { Raw }                                  from 'tgsnake'

import { TgsnakeAdapterService }                from './index.js'
import { getRandomBigIntGetter }                from '../getters/index.js'

@Injectable()
export class SendMessageToOperatorService {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  async process(text: string): Promise<void> {
    const userId = BigInt(7780539101)

    const accessHash = BigInt(-4527249835120344293n)

    const randomBigInt = getRandomBigIntGetter()

    // TODO move cb-data constants to infra layer
    await this.tgsnakeAdapterService.api.sendMessage(userId, text, {
      replyMarkup: {
        inlineKeyboard: [
          [
            {
              text: 'confirm-appointment',
              callbackData: 'confirm-appointment-cb-data',
            },
            {
              text: 'cancel-appointment',
              callbackData: 'cancel-appointment-cb-data',
            },
          ],
        ],
      },
    })

    // await this.tgsnakeAdapterService.api.invoke(
    //   new Raw.messages.SendMessage({
    //     message: text,
    //     peer: new Raw.InputPeerUser({ userId, accessHash }),
    //     randomId: randomBigInt,
    //   })
    // )
  }
}
