import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../ports/index.js'
import { ruLocale }           from '../locals/index.js'

@Injectable()
export class ReceiveMessageUseCase {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  // TODO interface
  // TODO какой контекст сюда должен попадать?
  // 	- отформатированный?
  // 	- контекст tgsnake?

  // TODO провести formatted telegram-bot-context-type
  // TODO по сути в рамках контекста `telegram-bot` - используются одни типы
  // и в application и в infrastructure
  // поэтому, я думаю, что нужно создать дополнительный пакет
  // с типами на одном уровне и с
  // application и с infrastructure
  // и использовать его и там и там и в адаптере
  // либо создать его именно в infrastructure -
  // потомучто этот пакет отвечает за инфрастукруктуру, чем типы и являются

  // TODO locales to adapter?
  // - при смене адаптера должны меняться сообщения?

  async process(ctx) {
    try {
      const { entrypointAnswer } = ruLocale.receiveMessage
      console.log('entrypoint answer')
      await this.telegramClient.sendMessage(ctx, entrypointAnswer)
    } catch (error) {
      const { serverErrorMessage } = ruLocale.appointmentConversation
      await this.telegramClient.sendMessage(ctx, serverErrorMessage)
    }
  }
}
