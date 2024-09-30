import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../../ports/index.js'
import { ruLocale }           from '../../locals/index.js'

@Injectable()
class ReceiveMessageService {
  constructor(private readonly telegramClient: TelegramClientPort) {}

  async process(ctx) {
    try {
      const { entrypointAnswer } = ruLocale.receiveMessage
      await this.telegramClient.sendMessage(ctx, entrypointAnswer)
    } catch (error) {
      const { serverErrorMessage } = ruLocale.appointmentConversation
      await this.telegramClient.sendMessage(ctx, serverErrorMessage)
    }
  }
}

export { ReceiveMessageService }
