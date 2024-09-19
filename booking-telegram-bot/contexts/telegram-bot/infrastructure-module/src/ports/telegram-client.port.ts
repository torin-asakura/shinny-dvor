import { Injectable }            from '@nestjs/common'
import { Logger }                from '@nestjs/common'
import { TelegramClientPort }    from '@telegram-bot/application-module'

import { TgsnakeAdapterService } from '@booking-telegram-bot/tgsnake-adapter-module'

@Injectable()
export class TelegramClientPortImpl implements TelegramClientPort {
  private readonly logger = new Logger('TelegramClientPort')

  // TODO почему на этом уровне конструктор завязан на tgsnake?
  // TODO почему зависимости добавленны и в дев и в пир?
  constructor(private readonly telegramClient: TgsnakeAdapterService) {}

  async listenMessage() {
    this.logger.debug('log on video converter port')

    this.telegramClient.on('msg.text', (update) => {
      return update.msg?.reply('I hear You!')
    })

    return
  }
}
