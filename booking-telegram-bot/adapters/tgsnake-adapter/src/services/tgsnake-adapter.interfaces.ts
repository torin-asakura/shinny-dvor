import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'
import type { Composer }                        from 'tgsnake'
import type { Conversation }                    from 'tgsnake/lib/src/Conversation/conversation.js'
import type { TypeUpdate }                      from 'tgsnake/lib/src/TL/Updates/Update.js'

type TgsnakeContextType = TypeUpdate

type CallbackType = (ctx: TelegramBotFormattedContextType) => Promise<void>

type WaitMessageType = ReturnType<Conversation<Record<string, never>>['wait']>

type WaitMessageCallbackType = (ctx: TelegramBotFormattedContextType) => boolean

type OnMessageReturnType = Composer

type OnCommandReturnType = Composer

type CreateConversationReturnType = {
  data: Record<string, any>
  waitMessage: (callback: WaitMessageCallbackType) => WaitMessageType
}

export type { TgsnakeContextType }
export type { CallbackType }
export type { CreateConversationReturnType }
export type { WaitMessageType }
export type { OnMessageReturnType }
export type { OnCommandReturnType }
