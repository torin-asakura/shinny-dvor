import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'
import type { TypeUpdate }                      from 'tgsnake/lib/src/TL/Updates/Update.js'

type TgsnakeContextType = TypeUpdate

type CallbackType = (ctx: TelegramBotFormattedContextType) => Promise<void>

export type { TgsnakeContextType }
export type { CallbackType }
