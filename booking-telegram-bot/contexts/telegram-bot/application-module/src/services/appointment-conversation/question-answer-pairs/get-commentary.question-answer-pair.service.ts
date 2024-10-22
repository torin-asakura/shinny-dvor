import type { TelegramBotFormattedContextType } from '../../../interfaces/index.js'

import { Injectable }                           from '@nestjs/common'

import { QuestionAnswerPairAbstractClass }      from '../../../interfaces/index.js'
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
      this.i18n.appointmentConversationContinueWithoutCommentaryButton
    const cancelAppointmentButton = this.i18n.appointmentConversationCancelAppointmentButton
    const commentaryTitle = this.i18n.appointmentConversationCommentaryTitle

    await this.telegramClient.sendMessageWithMarkup(ctx, commentaryTitle, [
      continueWithoutCommentaryButton,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    const continueWithoutCommentaryButton =
      this.i18n.appointmentConversationContinueWithoutCommentaryButton

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
