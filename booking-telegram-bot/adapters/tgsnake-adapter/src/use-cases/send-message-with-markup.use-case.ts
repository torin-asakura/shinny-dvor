import type { TelegramBotFormattedContextType } from '@booking-telegram-bot/tgsnake-adapter'
import type { TgsnakeAdapterService }           from '@booking-telegram-bot/tgsnake-adapter'

import { Raw }                                  from 'tgsnake'

import { getRandomBigIntGetter }                from '../getters/get-random-big-int.getter.js'

// TODO сделать из сенд-мессейдж - один файл.
// на входе сделать проверку типов и разбить на несколько дочерних функций
const sendMessageWithMarkupUseCase = async (
  tgsnakeClient: TgsnakeAdapterService,
  ctx: TelegramBotFormattedContextType,
  text: string,
  buttons: Array<Array<string> | string>
): Promise<void> => {
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

  await tgsnakeClient.api.invoke(
    new Raw.messages.SendMessage({
      message: text,
      peer: new Raw.InputPeerUser({ userId, accessHash }),
      replyMarkup,
      randomId: randomBigInt,
    })
  )
}

export { sendMessageWithMarkupUseCase }
