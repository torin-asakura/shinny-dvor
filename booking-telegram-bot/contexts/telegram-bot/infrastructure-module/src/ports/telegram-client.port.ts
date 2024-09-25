import { Injectable }            from '@nestjs/common'
import { Logger }                from '@nestjs/common'

import { TgsnakeAdapterService } from '@booking-telegram-bot/tgsnake-adapter'
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

  async sendMessageWithMarkup(ctx: any, text: string, buttonsText: Array<string>) {
    return await this.telegramClient.sendMessageWithMarkup(ctx, text, buttonsText)
  }

  async createConversation(ctx: any) {
    return await this.telegramClient.createConversation(ctx)
  }

  async removeConversation(ctx: any) {
    return await this.telegramClient.removeConversation(ctx)
  }
}
