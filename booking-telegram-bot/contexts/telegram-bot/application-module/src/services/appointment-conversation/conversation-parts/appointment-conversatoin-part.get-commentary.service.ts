import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../../../ports/index.js'
import { ConversationPart }   from '../../conversation-part.class.js'
import { ruLocale }           from '../../../locals/index.js'

@Injectable()
export class AppointmentGetCommentaryConversationPart extends ConversationPart {
  // TODO interfaces
  servicesData: any
  serviceTitles: Array<string>

  conversationPartName: string = 'commentary'

  constructor(private readonly telegramClient: TelegramClientPort) {
    super()
  }

  async sendQuestion(ctx) {
    const { continueWithoutCommentaryButton, cancelAppointmentButton } =
      ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, 'commentary*', [
      continueWithoutCommentaryButton,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    const { continueWithoutCommentaryButton } = ruLocale.appointmentConversation

    if (responseText === continueWithoutCommentaryButton) {
      return true
    }

    return responseText
  }

  checkWriteConversationDataCondition(checkAnswerResult) {
    if (typeof checkAnswerResult === 'string') {
      return true
    }
    return false
  }
}
