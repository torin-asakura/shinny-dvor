import type { TelegramBotFormattedContextType } from '../interfaces/index.js'

import { Injectable }                           from '@nestjs/common'
import { Raw }                                  from 'tgsnake'

import { TgsnakeAdapterService }                from './index.js'
import { getRandomBigIntGetter }                from '../getters/index.js'

@Injectable()
class SendMessageWithMarkupService {
  constructor(private readonly tgsnakeAdapterService: TgsnakeAdapterService) {}

  async process(
    ctx: TelegramBotFormattedContextType,
    text: string,
    buttons: Array<Array<string> | string>
  ): Promise<void> {
    const { userId } = ctx
    const { accessHash } = ctx

    const randomBigInt = getRandomBigIntGetter()

    const rows = []

    for (const rowButton of buttons) {
      if (typeof rowButton === 'object') {
        const row = []
        for (const columnButon of rowButton) {
          row.push(new Raw.KeyboardButton({ text: columnButon }))
        }
        rows.push(
          new Raw.KeyboardButtonRow({
            buttons: row,
          })
        )
      } else {
        rows.push(
          new Raw.KeyboardButtonRow({
            buttons: [new Raw.KeyboardButton({ text: rowButton })],
          })
        )
      }
    }

    const replyMarkup = new Raw.ReplyKeyboardMarkup({
      rows,
    })

    await this.tgsnakeAdapterService.api.invoke(
      new Raw.messages.SendMessage({
        message: text,
        peer: new Raw.InputPeerUser({ userId, accessHash }),
        replyMarkup,
        randomId: randomBigInt,
      })
    )
  }
}

export { SendMessageWithMarkupService }
