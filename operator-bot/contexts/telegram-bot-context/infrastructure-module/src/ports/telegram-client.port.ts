import type { TelegramClientPort } from '@operator-bot/telegram-bot-context_application-module'

import { Injectable }              from '@nestjs/common'

import { SendMessageService }      from '@operator-bot/tgsnake-adapter'

@Injectable()
export class TelegramClientPortImpl implements TelegramClientPort {
  constructor(private readonly sendMessageUseCase: SendMessageService) {}

  // async sendMessage(ctx: TelegramBotFormattedContextType, text: string): Promise<void> {

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async sendMessage(ctx: any, text: string): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.sendMessageUseCase.process(ctx, text)
  }
}
