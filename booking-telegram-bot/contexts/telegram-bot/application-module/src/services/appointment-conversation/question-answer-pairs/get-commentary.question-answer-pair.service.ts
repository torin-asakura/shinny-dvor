import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { QuestionAnswerPairAbstractClass }      from '@telegram-bot/application-module/interfaces'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { I18nPort }                             from '../../../ports/index.js'

@Injectable()
class GetCommentaryQuestionAnswerPart extends QuestionAnswerPairAbstractClass {
  questionAnswerPairName = 'commentary'

  serviceTitles: Array<string>

  // eslint-disable-next-line
  constructor(telegramClient: TelegramClientPort, i18n: I18nPort) {
    super(telegramClient, i18n)
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType): Promise<void> {
    const continueWithoutCommentaryButton =
      this.i18n.getAppointmentConversationContinueWithoutCommentaryButton()
    const cancelAppointmentButton = this.i18n.getAppointmentConversationCancelAppointmentButton()
    const commentaryTitle = this.i18n.getAppointmentConversationCommentaryTitle()

    await this.telegramClient.sendMessageWithMarkup(ctx, commentaryTitle, [
      continueWithoutCommentaryButton,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    const continueWithoutCommentaryButton =
      this.i18n.getAppointmentConversationContinueWithoutCommentaryButton()

    if (responseText === continueWithoutCommentaryButton) {
      return true
    }

    return responseText
  }

  checkWriteConversationDataCondition(checkAnswerResult: boolean | string): boolean {
    if (typeof checkAnswerResult === 'string') {
      return true
    }
    return false
  }
}

export { GetCommentaryQuestionAnswerPart }
