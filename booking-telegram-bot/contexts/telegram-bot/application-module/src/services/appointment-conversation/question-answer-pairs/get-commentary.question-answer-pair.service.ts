/* eslint-disable @typescript-eslint/naming-convention */
import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { QuestionAnswerPair }                   from '@telegram-bot/application-module/classes'

import { TelegramClientPort }                   from '../../../ports/index.js'

@Injectable()
class GetCommentaryQuestionAnswerPart extends QuestionAnswerPair {
  questionAnswerPairName = 'commentary'

  serviceTitles: Array<string>

  // eslint-disable-next-line
  constructor(telegramClient: TelegramClientPort) {
    super(telegramClient)
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType): Promise<void> {
    const {
      appointmentConversation_continueWithoutCommentaryButton,
      appointmentConversation_cancelAppointmentButton,
    } = this.telegramClient.ruLocale

    await this.telegramClient.sendMessageWithMarkup(ctx, 'commentary*', [
      appointmentConversation_continueWithoutCommentaryButton,
      appointmentConversation_cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    const { appointmentConversation_continueWithoutCommentaryButton } = this.telegramClient.ruLocale

    if (responseText === appointmentConversation_continueWithoutCommentaryButton) {
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
