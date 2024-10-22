import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetRadiiTitlesUseCase }                from '@query-client/application-module'
import { QuestionAnswerPairAbstractClass }      from '@telegram-bot/application-module/interfaces'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { I18nPort }                             from '../../../ports/index.js'

@Injectable()
class GetRadiiQuestionAnswerPart extends QuestionAnswerPairAbstractClass {
  questionAnswerPairName = 'radii'

  radiiTitles: Array<string>

  constructor(
    telegramClient: TelegramClientPort,
    private readonly getRadiiTitlesUseCase: GetRadiiTitlesUseCase,
    i18n: I18nPort
  ) {
    super(telegramClient, i18n)
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType): Promise<void> {
    await this.initData()

    const selectRadiiMessage = this.i18n.appointmentConversationSelectRadiiMessage
    const cancelAppointmentButton = this.i18n.appointmentConversationCancelAppointmentButton

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

    const missClickMessage = this.i18n.appointmentConversationMissClick
    this.telegramClient.replyMessage(ctx, missClickMessage)

    return false
  }

  private async initData(): Promise<void> {
    this.radiiTitles = await this.getRadiiTitlesUseCase.execute()
  }
}

export { GetRadiiQuestionAnswerPart }
