import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import type { ConversationDataType }            from './get-approval.question-answer-pair.interface.js'

import { Injectable }                           from '@nestjs/common'

import { QuestionAnswerPairAbstractClass }      from '@telegram-bot/application-module/interfaces'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { I18nPort }                             from '../../../ports/index.js'

@Injectable()
class GetApprovalQuestionAnswerPair extends QuestionAnswerPairAbstractClass {
  questionAnswerPairName = 'approval'

  // eslint-disable-next-line
  constructor(telegramClient: TelegramClientPort, i18n: I18nPort) {
    super(telegramClient, i18n)
  }

  async sendQuestion(
    ctx: TelegramBotFormattedContextType,
    questionData: ConversationDataType
  ): Promise<void> {
    const approvalMessage = this.getApprovalMessage(questionData)

    const approveAppointmentButton = this.i18n.getAppointmentConversationApproveAppointmentButton()
    const editAppointmentButton = this.i18n.getAppointmentConversationEditAppointmentButton()
    const cancelAppointmentButton = this.i18n.getAppointmentConversationCancelAppointmentButton()

    await this.telegramClient.sendMessageWithMarkup(ctx, approvalMessage, [
      approveAppointmentButton,
      editAppointmentButton,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean {
    const { messageText: responseText } = ctx

    const approveAppointmentButton = this.i18n.getAppointmentConversationApproveAppointmentButton()
    const editAppointmentButton = this.i18n.getAppointmentConversationEditAppointmentButton()

    if (responseText === approveAppointmentButton) {
      return true
    }

    if (responseText === editAppointmentButton) {
      this.telegramClient.removeConversation(ctx.chatId)
      return true
    }

    const missClickMessage = this.i18n.getAppointmentConversationMissClick()
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

    const carBodyTitle = this.i18n.getAppointmentConversationCarBodyTitle()
    const radiiTitle = this.i18n.getAppointmentConversationRadiiTitle()
    const serviceTitle = this.i18n.getAppointmentConversationServiceTitle()
    const selectedDateTitle = this.i18n.getAppointmentConversationSelectedDateTitle()
    const commentaryTitle = this.i18n.getAppointmentConversationCommentaryTitle()

    let approvalMessage = ''
    approvalMessage += `${carBodyTitle}: ${carBody}\n`
    approvalMessage += `${radiiTitle}: ${radii}\n`
    approvalMessage += `${serviceTitle}: ${service}\n`
    approvalMessage += `${selectedDateTitle}: ${selectedDateText}\n`
    if (typeof commentary === 'string') approvalMessage += `${commentaryTitle}: ${commentary}`

    return approvalMessage
  }
}

export { GetApprovalQuestionAnswerPair }
