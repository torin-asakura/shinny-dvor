import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../../../ports/index.js'
import { ConversationPart }   from '../../conversation-part.class.js'
import { ruLocale }           from '../../../locals/index.js'

@Injectable()
export class AppointmentGetCommentaryConversationPart extends ConversationPart {
  // @ts-expect-error any
  servicesData
  serviceTitles: Array<string>

  conversationPartName: string = 'commentary'

  constructor(private readonly telegramClient: TelegramClientPort) {
    // @ts-expect-error arguments
    super()
  }

  // @ts-expect-error not assignable
  async sendQuestion(ctx) {
    const { continueWithoutCommentaryButton, cancelAppointmentButton } =
      ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, 'commentary*', [
      continueWithoutCommentaryButton,
      cancelAppointmentButton,
    ])
  }

  // @ts-expect-error not assignable
  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    const { continueWithoutCommentaryButton } = ruLocale.appointmentConversation

    if (responseText === continueWithoutCommentaryButton) {
      return true
    }

    return responseText
  }

  // @ts-expect-error any
  checkWriteConversationDataCondition(checkAnswerResult) {
    if (typeof checkAnswerResult === 'string') {
      return true
    }
    return false
  }
}
