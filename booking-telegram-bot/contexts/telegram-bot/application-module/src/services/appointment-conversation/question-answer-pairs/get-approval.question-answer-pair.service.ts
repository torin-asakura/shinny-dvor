/* eslint-disable @typescript-eslint/naming-convention */
import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import type { ConversationDataType }            from './get-approval.question-answer-pair.interface.js'

import { Injectable }                           from '@nestjs/common'

import { QuestionAnswerPairAbstractClass }      from '@telegram-bot/application-module/interfaces'

import { TelegramClientPort }                   from '../../../ports/index.js'

@Injectable()
class GetApprovalQuestionAnswerPair extends QuestionAnswerPairAbstractClass {
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

    const {
      appointmentConversation_approveAppointmentButton,
      appointmentConversation_editAppointmentButton,
      appointmentConversation_cancelAppointmentButton,
    } = this.telegramClient.ruLocale

    await this.telegramClient.sendMessageWithMarkup(ctx, approvalMessage, [
      appointmentConversation_approveAppointmentButton,
      appointmentConversation_editAppointmentButton,
      appointmentConversation_cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean {
    const { messageText: responseText } = ctx

    const {
      appointmentConversation_approveAppointmentButton,
      appointmentConversation_editAppointmentButton,
    } = this.telegramClient.ruLocale

    if (responseText === appointmentConversation_approveAppointmentButton) {
      return true
    }

    if (responseText === appointmentConversation_editAppointmentButton) {
      this.telegramClient.removeConversation(ctx.chatId)
      return true
    }

    const { appointmentConversation_missClickMessage } = this.telegramClient.ruLocale
    this.telegramClient.replyMessage(ctx, appointmentConversation_missClickMessage)

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

    const carBodyTitle = this.telegramClient.ruLocale.appointmentConversation_carBodyTitle
    const radiiTitle = this.telegramClient.ruLocale.appointmentConversation_radiiTitle
    const serviceTitle = this.telegramClient.ruLocale.appointmentConversation_serviceTitle
    const selectedDateTitle = this.telegramClient.ruLocale.appointmentConversation_selectedDateTitle
    const commentaryTitle = this.telegramClient.ruLocale.appointmentConversation_commentaryTitle

    let approvalMessage = ''
    approvalMessage += `${carBodyTitle}: ${carBody}\n`
    approvalMessage += `${radiiTitle}: ${radii}\n`
    approvalMessage += `${serviceTitle}: ${service}\n`
    approvalMessage += `${selectedDateTitle}: ${selectedDateText}\n`
    if (commentary) approvalMessage += `${commentaryTitle}: ${commentary}`

    return approvalMessage
  }
}

export { GetApprovalQuestionAnswerPair }
