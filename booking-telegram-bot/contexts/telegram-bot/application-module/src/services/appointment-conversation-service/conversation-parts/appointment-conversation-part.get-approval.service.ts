import { Injectable }                      from '@nestjs/common'

import { TelegramClientPort }              from '../../../ports/index.js'
import { ConversationPart }                from '../../conversation-part.class.js'
import { CANCEL_APPOINTMENT_BUTTON_TEXT }  from '../appointment-conversation.constants.js'
import { APPROVE_APPOINTMENT_BUTTON_TEXT } from '../appointment-conversation.constants.js'
import { EDIT_APPOINTMENT_BUTTON_TEXT }    from '../appointment-conversation.constants.js'

@Injectable()
export class AppointmentGetApprovalConversationPart extends ConversationPart {
  constructor(private readonly telegramClient: TelegramClientPort) {
    super()
  }

  private getApprovalMessage(conversationData) {
    const { carBody, radii, service, commentary, timeSlot } = conversationData

    const selectedTimeDate = new Date(timeSlot.milliseconds)
    let selectedDateText = selectedTimeDate.toLocaleDateString('ru-RU', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    let approvalMessage = ''
    approvalMessage += `Тип кузова: ${carBody}\n`
    approvalMessage += `Диаметр колёс: ${radii}\n`
    approvalMessage += `Тип ремонта: ${service}\n`
    approvalMessage += `Выбранная дата: ${selectedDateText}\n`
    if (commentary) approvalMessage += `Комментарий: ${commentary}`

    return approvalMessage
  }

  async sendQuestion(ctx, questionData) {
    const approvalMessage = this.getApprovalMessage(questionData)

    await this.telegramClient.sendMessageWithMarkup(ctx, approvalMessage, [
      APPROVE_APPOINTMENT_BUTTON_TEXT,
      EDIT_APPOINTMENT_BUTTON_TEXT,
      CANCEL_APPOINTMENT_BUTTON_TEXT,
    ])
  }

  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    // TODO switch case
    if (responseText === CANCEL_APPOINTMENT_BUTTON_TEXT || responseText === '/cancel') {
      console.log('cancel appointment')
    } else if (responseText === APPROVE_APPOINTMENT_BUTTON_TEXT) {
      return true
    } else if (responseText === EDIT_APPOINTMENT_BUTTON_TEXT) {
      // TODO - смотри, как сделан commentary. там таже логика
      // this.process(ctx)
      return false
    }

    return false
  }
}
