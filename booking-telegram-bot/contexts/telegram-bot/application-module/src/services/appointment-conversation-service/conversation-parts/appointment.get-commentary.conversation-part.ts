import { Injectable }                              from '@nestjs/common'

import { GET_SERVICES }                            from '@globals/data'
import { RunQueryUseCase }                         from '@graphql-client/application-module'
import { checkArrayLength }                        from '@globals/data'

import { TelegramClientPort }                      from '../../../ports/index.js'
import { ConversationPart }                        from '../../conversation-part.class.js'
import { CANCEL_APPOINTMENT_BUTTON_TEXT }          from '../appointment.constants.js'
import { CONTINUE_WITHOUT_COMMENTARY_BUTTON_TEXT } from '../appointment.constants.js'

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
    await this.telegramClient.sendMessageWithMarkup(ctx, 'commentary*', [
      CONTINUE_WITHOUT_COMMENTARY_BUTTON_TEXT,
      CANCEL_APPOINTMENT_BUTTON_TEXT,
    ])
  }

  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    // TODO switch case
    if (responseText === CANCEL_APPOINTMENT_BUTTON_TEXT || responseText === '/cancel') {
      // TODO cancel
      console.log('cancel appointment')
    } else if (responseText === CONTINUE_WITHOUT_COMMENTARY_BUTTON_TEXT) {
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
