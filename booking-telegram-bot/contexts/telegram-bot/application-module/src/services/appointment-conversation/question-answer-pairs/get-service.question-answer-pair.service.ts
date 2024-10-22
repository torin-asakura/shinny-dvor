import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetServiceTitlesUseCase }              from '@query-client/application-module'
import { QuestionAnswerPairAbstractClass }      from '@telegram-bot/application-module/interfaces'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { I18nPort }                             from '../../../ports/index.js'

@Injectable()
class GetServiceQuestionAnswerPart extends QuestionAnswerPairAbstractClass {
  questionAnswerPairName = 'service'

  serviceTitles: Array<string>

  constructor(
    telegramClient: TelegramClientPort,
    private readonly getServiceTitlesUseCase: GetServiceTitlesUseCase,
    i18n: I18nPort
  ) {
    super(telegramClient, i18n)
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType): Promise<void> {
    await this.initData()

    const selectServiceMessage = this.i18n.appointmentConversationSelectServiceMessage
    const cancelAppointmentButton = this.i18n.appointmentConversationCancelAppointmentButton

    await this.telegramClient.sendMessageWithMarkup(ctx, selectServiceMessage, [
      ...this.serviceTitles,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    const missClickMessage = this.i18n.appointmentConversationMissClick
    if (this.serviceTitles.includes(responseText)) {
      return responseText
    }

    this.telegramClient.replyMessage(ctx, missClickMessage)
    return false
  }

  private async initData(): Promise<void> {
    this.serviceTitles = await this.getServiceTitlesUseCase.execute()
  }
}

export { GetServiceQuestionAnswerPart }
