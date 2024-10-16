/* eslint-disable @typescript-eslint/naming-convention */
import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetRadiiTitlesUseCase }                from '@query-client/application-module'
import { QuestionAnswerPair }                   from '@telegram-bot/application-module/classes'

import { TelegramClientPort }                   from '../../../ports/index.js'

@Injectable()
class GetRadiiQuestionAnswerPart extends QuestionAnswerPair {
  questionAnswerPairName = 'radii'

  radiiTitles: Array<string>

  constructor(
    telegramClient: TelegramClientPort,
    private readonly getRadiiTitlesUseCase: GetRadiiTitlesUseCase
  ) {
    super(telegramClient)
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType): Promise<void> {
    await this.initData()

    const {
      appointmentConversation_selectRadiiMessage,
      appointmentConversation_cancelAppointmentButton,
    } = this.telegramClient.ruLocale

    await this.telegramClient.sendMessageWithMarkup(
      ctx,
      appointmentConversation_selectRadiiMessage,
      [...this.radiiTitles, appointmentConversation_cancelAppointmentButton]
    )
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    if (this.radiiTitles.includes(responseText)) {
      return responseText
    }

    const { appointmentConversation_missClickMessage } = this.telegramClient.ruLocale
    this.telegramClient.replyMessage(ctx, appointmentConversation_missClickMessage)

    return false
  }

  private async initData(): Promise<void> {
    this.radiiTitles = await this.getRadiiTitlesUseCase.execute()
  }
}

export { GetRadiiQuestionAnswerPart }
