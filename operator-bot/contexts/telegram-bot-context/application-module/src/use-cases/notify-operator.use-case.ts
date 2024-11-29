import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../ports/index.js'
import { I18nPort }           from '../ports/index.js'

@Injectable()
export class NotifyOperatorUseCase {
  constructor(
    private readonly telegramClientPort: TelegramClientPort,
    private readonly i18nPort: I18nPort
  ) {}

  async execute(appointmentData): Promise<void> {
    return this.telegramClientPort.sendMessageToOperator('test text from telegram bot use case')
    // console.log(appointmentData)
  }
}
