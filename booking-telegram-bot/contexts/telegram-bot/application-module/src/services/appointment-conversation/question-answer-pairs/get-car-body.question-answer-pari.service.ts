/* eslint-disable @typescript-eslint/naming-convention */
import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetCarBodyTitlesUseCase }              from '@query-client/application-module'
import { QuestionAnswerPair }                   from '@telegram-bot/application-module/classes'

import { TelegramClientPort }                   from '../../../ports/index.js'

@Injectable()
class GetCarBodyQuestionAnswerPart extends QuestionAnswerPair {
  questionAnswerPairName = 'carBody'

  carBodyTitles: Array<string>

  constructor(
    telegramClient: TelegramClientPort,
    private readonly getCarBodyTitlesUseCase: GetCarBodyTitlesUseCase
  ) {
    super(telegramClient)
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType): Promise<void> {
    await this.initData()

    const {
      appointmentConversation_selectCarBodyMessage,
      appointmentConversation_cancelAppointmentButton,
    } = this.telegramClient.ruLocale

    await this.telegramClient.sendMessageWithMarkup(
      ctx,
      appointmentConversation_selectCarBodyMessage,
      [...this.carBodyTitles, appointmentConversation_cancelAppointmentButton]
    )
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    const { appointmentConversation_missClickMessage } = this.telegramClient.ruLocale

    if (this.carBodyTitles.includes(responseText)) {
      return responseText
    }

    this.telegramClient.replyMessage(ctx, appointmentConversation_missClickMessage)
    return false
  }

  private async initData(): Promise<void> {
    this.carBodyTitles = await this.getCarBodyTitlesUseCase.execute()
  }
}

export { GetCarBodyQuestionAnswerPart }
