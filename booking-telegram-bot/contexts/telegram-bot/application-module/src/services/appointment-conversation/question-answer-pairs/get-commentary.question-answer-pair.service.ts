import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { QuestionAnswerPair }                   from '@telegram-bot/application-module/classes'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { ruLocale }                             from '../../../locals/index.js'

@Injectable()
class GetCommentaryQuestionAnswerPart extends QuestionAnswerPair {
  questionAnswerPairName = 'commentary'

  serviceTitles: Array<string>

  // eslint-disable-next-line
  constructor(telegramClient: TelegramClientPort) {
    super(telegramClient)
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType): Promise<void> {
    const { continueWithoutCommentaryButton, cancelAppointmentButton } =
      ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, 'commentary*', [
      continueWithoutCommentaryButton,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    const { continueWithoutCommentaryButton } = ruLocale.appointmentConversation

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
