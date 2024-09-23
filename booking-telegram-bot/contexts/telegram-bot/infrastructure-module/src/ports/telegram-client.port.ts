import { Injectable }            from '@nestjs/common'
import { Logger }                from '@nestjs/common'

import { TgsnakeAdapterService } from '@booking-telegram-bot/tgsnake-adapter-module'
import { TelegramClientPort }    from '@telegram-bot/application-module'

@Injectable()
export class TelegramClientPortImpl implements TelegramClientPort {
  constructor(private readonly telegramClient: TgsnakeAdapterService) {}

  async reply(ctx: any, text: string) {
    return await this.telegramClient.reply(ctx, text)
  }

  async sendMessage(ctx: any, text: string) {
    return await this.telegramClient.sendMessage(ctx, text)
  }

  async createConversation(ctx: any) {
    return await this.telegramClient.createConversation(ctx)
  }

  async removeConversation(ctx: any) {
    return await this.telegramClient.removeConversation(ctx)
  }
}
