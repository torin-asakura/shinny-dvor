import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import type { ConversationDataType }            from './get-approval.question-answer-pair.interface.js'

import { Injectable }                           from '@nestjs/common'

import { QuestionAnswerPair }                   from '@telegram-bot/application-module/classes'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { ruLocale }                             from '../../../locals/index.js'

@Injectable()
class GetApprovalQuestionAnswerPair extends QuestionAnswerPair {
  questionAnswerPairName = 'approval'

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
    this.telegramClient.replyMessage(ctx, missClickMessage)

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

export { GetApprovalQuestionAnswerPair }
