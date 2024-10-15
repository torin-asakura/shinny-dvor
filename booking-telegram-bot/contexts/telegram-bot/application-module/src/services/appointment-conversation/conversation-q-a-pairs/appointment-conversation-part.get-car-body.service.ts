import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetCarBodyTitlesUseCase }              from '@query-client/application-module'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { ConversationQAPair }                   from '../../conversation-q-a-pair.class.js'
import { ruLocale }                             from '../../../locals/index.js'

@Injectable()
export class AppointmentGetCarBodyConversationPart extends ConversationQAPair {
  carBodyTitles: Array<string>

  conversationPartName: string = 'carBody'

  constructor(
    telegramClient: TelegramClientPort,
    private readonly getCarBodyTitlesUseCase: GetCarBodyTitlesUseCase
  ) {
    super(telegramClient)
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType): Promise<void> {
    await this.initData()

    const { selectCarBodyMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectCarBodyMessage, [
      ...this.carBodyTitles,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    const { missClickMessage } = ruLocale.appointmentConversation

    if (this.carBodyTitles.includes(responseText)) {
      return responseText
    }

    this.telegramClient.replyMessage(ctx, missClickMessage)
    return false
  }

  private async initData(): Promise<void> {
    this.carBodyTitles = await this.getCarBodyTitlesUseCase.execute()
  }
}
