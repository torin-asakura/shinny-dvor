import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../../../ports/index.js'
import { ConversationPart }   from '../../conversation-part.class.js'
import { ruLocale }           from '../../../locals/index.js'

// TODO create conversationPart Class with createConversation method and extend that class

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

    const { cancelAppointmentButton, cancelAppointmentCommand, continueWithoutCommentaryButton } =
      ruLocale.appointmentConversation

    // TODO switch case
    if (responseText === cancelAppointmentButton || responseText === cancelAppointmentCommand) {
      // TODO cancel
      console.log('cancel appointment')
    } else if (responseText === continueWithoutCommentaryButton) {
      return true
    }

    return responseText
  }

  checkAnswerCondition(checkAnswerResult) {
    if (typeof checkAnswerResult === 'string') {
      return true
    }
    return false
  }
}
