import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'

import { Injectable }                           from '@nestjs/common'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { ConversationPart }                     from '../../conversation-part.class.js'
import { ruLocale }                             from '../../../locals/index.js'

@Injectable()
export class AppointmentGetApprovalConversationPart extends ConversationPart {
  constructor(private readonly telegramClient: TelegramClientPort) {
    // @ts-expect-error
    super()
  }

  // @ts-expect-error any type
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

  // @ts-expect-error not assignable
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

  checkAnswer(ctx: TelegramBotFormattedContextType) {
    const { messageText: responseText } = ctx

    const { approveAppointmentButton, editAppointmentButton } = ruLocale.appointmentConversation

    if (responseText === approveAppointmentButton) {
      return true
    } else if (responseText === editAppointmentButton) {
      return this.telegramClient.removeConversation(ctx)
    }

    return false
  }
}
