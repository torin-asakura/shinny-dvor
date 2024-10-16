import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetRadiiTitlesUseCase }                from '@query-client/application-module'
import { QuestionAnswerPair }                   from '@telegram-bot/application-module/classes'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { ruLocale }                             from '../../../locals/index.js'

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

    const { selectRadiiMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectRadiiMessage, [
      ...this.radiiTitles,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    if (this.radiiTitles.includes(responseText)) {
      return responseText
    }

    const { missClickMessage } = ruLocale.appointmentConversation
    this.telegramClient.replyMessage(ctx, missClickMessage)

    return false
  }

  private async initData(): Promise<void> {
    this.radiiTitles = await this.getRadiiTitlesUseCase.execute()
  }
}

export { GetRadiiQuestionAnswerPart }
