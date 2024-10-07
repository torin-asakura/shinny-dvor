import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'

import type { ConversationDataType }            from './appointment-conversation-part.get-approval.interface.js'

import { Injectable }                           from '@nestjs/common'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { ConversationPart }                     from '../../conversation-part.class.js'
import { ruLocale }                             from '../../../locals/index.js'

@Injectable()
export class AppointmentGetApprovalConversationPart extends ConversationPart {
  // eslint-disable-next-line
  constructor(telegramClient: TelegramClientPort) {
    super(telegramClient)
  }

  async sendQuestion(
    ctx: TelegramBotFormattedContextType,
    questionData: ConversationDataType
  ): Promise<void> {
    const approvalMessage = this.getApprovalMessage(questionData)

    const { approveAppointmentButton, editAppointmentButton, cancelAppointmentButton } =
      ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, approvalMessage, [
      approveAppointmentButton,
      editAppointmentButton,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean {
    const { messageText: responseText } = ctx

    const { approveAppointmentButton, editAppointmentButton } = ruLocale.appointmentConversation

    if (responseText === approveAppointmentButton) {
      return true
    }

    if (responseText === editAppointmentButton) {
      this.telegramClient.removeConversation(ctx.chatId)
      return true
    }

    const { missClickMessage } = ruLocale.appointmentConversation
    ctx.replyMessage(missClickMessage)

    return false
  }

  private getApprovalMessage(conversationData: ConversationDataType): string {
    const { carBody, radii, service, commentary, timeSlot } = conversationData

    const selectedTimeDate = new Date(timeSlot.milliseconds)
    const selectedDateText = selectedTimeDate.toLocaleDateString('ru-RU', {
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
}
