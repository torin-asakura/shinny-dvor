import type { TelegramClientPort }      from '@operator-bot/telegram-bot-application-module'

import { Injectable }                   from '@nestjs/common'

import { SendMessageService }           from '@operator-bot/tgsnake-adapter'
import { SendMessageToOperatorService } from '@operator-bot/tgsnake-adapter'
import { EditMessageService }           from '@operator-bot/tgsnake-adapter'

@Injectable()
export class TelegramClientPortImpl implements TelegramClientPort {
  constructor(
    private readonly sendMessageUseCase: SendMessageService,
    private readonly sendMessageToOperatorService: SendMessageToOperatorService,
    private readonly editMessageService: EditMessageService
  ) {}

  // async sendMessage(ctx: TelegramBotFormattedContextType, text: string): Promise<void> {

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async sendMessage(ctx: any, text: string): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.sendMessageUseCase.process(ctx, text)
  }

  async sendMessageToOperator(text: string): Promise<void> {
    return this.sendMessageToOperatorService.process(text)
  }

  async editMessage(ctx: any, text: string): Promise<void> {
    return this.editMessageService.process(ctx, text)
  }
}
