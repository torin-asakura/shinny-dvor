/* eslint-disable @typescript-eslint/naming-convention */
import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetServiceTitlesUseCase }              from '@query-client/application-module'
import { QuestionAnswerPair }                   from '@telegram-bot/application-module/classes'

import { TelegramClientPort }                   from '../../../ports/index.js'

@Injectable()
class GetServiceQuestionAnswerPart extends QuestionAnswerPair {
  questionAnswerPairName = 'service'

  serviceTitles: Array<string>

  constructor(
    telegramClient: TelegramClientPort,
    private readonly getServiceTitlesUseCase: GetServiceTitlesUseCase
  ) {
    super(telegramClient)
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType): Promise<void> {
    await this.initData()

    const {
      appointmentConversation_selectServiceMessage,
      appointmentConversation_cancelAppointmentButton,
    } = this.telegramClient.ruLocale

    await this.telegramClient.sendMessageWithMarkup(
      ctx,
      appointmentConversation_selectServiceMessage,
      [...this.serviceTitles, appointmentConversation_cancelAppointmentButton]
    )
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    const { appointmentConversation_missClickMessage } = this.telegramClient.ruLocale

    if (this.serviceTitles.includes(responseText)) {
      return responseText
    }

    this.telegramClient.replyMessage(ctx, appointmentConversation_missClickMessage)
    return false
  }

  private async initData(): Promise<void> {
    this.serviceTitles = await this.getServiceTitlesUseCase.execute()
  }
}

export { GetServiceQuestionAnswerPart }
