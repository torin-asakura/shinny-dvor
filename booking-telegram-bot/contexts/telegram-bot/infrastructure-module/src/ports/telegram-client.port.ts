import { Injectable }            from '@nestjs/common'
import { Logger }                from '@nestjs/common'

import { TgsnakeAdapterService } from '@booking-telegram-bot/tgsnake-adapter-module'
import { TelegramClientPort }    from '@telegram-bot/application-module'

@Injectable()
export class TelegramClientPortImpl implements TelegramClientPort {
  // TODO почему на этом уровне конструктор завязан на tgsnake?
  // TODO почему зависимости добавленны и в дев и в пир?
  constructor(private readonly telegramClient: TgsnakeAdapterService) {}

  async listen() {
    return this.telegramClient.listenMessage()
  }
}
