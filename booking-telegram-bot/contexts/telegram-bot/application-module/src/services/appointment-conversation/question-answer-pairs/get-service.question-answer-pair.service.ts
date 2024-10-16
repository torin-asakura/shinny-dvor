import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetServiceTitlesUseCase }              from '@query-client/application-module'
import { QuestionAnswerPair }                   from '@telegram-bot/application-module/classes'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { ruLocale }                             from '../../../locals/index.js'

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

    const { selectServiceMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectServiceMessage, [
      ...this.serviceTitles,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    const { missClickMessage } = ruLocale.appointmentConversation

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
