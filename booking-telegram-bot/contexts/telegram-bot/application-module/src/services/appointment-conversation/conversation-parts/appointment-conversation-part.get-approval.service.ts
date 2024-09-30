import { Injectable }         from '@nestjs/common'

import { TelegramClientPort } from '../../../ports/index.js'
import { ConversationPart }   from '../../conversation-part.class.js'
import { ruLocale }           from '../../../locals/index.js'

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

    const { approvalMessageTitles } = ruLocale.appointmentConversation

    let approvalMessage = ''
    approvalMessage += `${approvalMessageTitles.carBody}: ${carBody}\n`
    approvalMessage += `${approvalMessageTitles.radii}: ${radii}\n`
    approvalMessage += `${approvalMessageTitles.service}: ${service}\n`
    approvalMessage += `${approvalMessageTitles.selectedDate}: ${selectedDateText}\n`
    if (commentary) approvalMessage += `${approvalMessageTitles.commentary}: ${commentary}`

    return approvalMessage
  }

  async sendQuestion(ctx, questionData) {
    const approvalMessage = this.getApprovalMessage(questionData)

    const { approveAppointmentButton, editAppointmentButton, cancelAppointmentButton } =
      ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, approvalMessage, [
      approveAppointmentButton,
      editAppointmentButton,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    const {
      approveAppointmentButton,
      editAppointmentButton,
      cancelAppointmentButton,
      cancelAppointmentCommand,
    } = ruLocale.appointmentConversation

    // TODO switch case
    if (responseText === cancelAppointmentButton || responseText === cancelAppointmentCommand) {
      console.log('cancel appointment')
    } else if (responseText === approveAppointmentButton) {
      return true
    } else if (responseText === editAppointmentButton) {
      // TODO - смотри, как сделан commentary. там таже логика
      // this.process(ctx)
      return false
    }

    return false
  }
}
