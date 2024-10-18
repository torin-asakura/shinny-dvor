/* eslint-disable @typescript-eslint/naming-convention */

import type { CreateConversationReturnType }    from '@telegram-bot/application-module'
import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import type { TelegramClientPort }              from '../ports/index.js'

abstract class QuestionAnswerPairAbstractClass {
  questionAnswerPairName!: string

  constructor(readonly telegramClient: TelegramClientPort) {}

  async process(
    ctx: TelegramBotFormattedContextType,
    conversation: CreateConversationReturnType,
    processData?: Record<'questionData', Record<string, any>>
  ): Promise<void> {
    const questionData = processData?.questionData

    await this.sendQuestion(ctx, questionData)

    await conversation.waitMessage((waitMessageCtx: TelegramBotFormattedContextType) => {
      const { messageText: responseText } = waitMessageCtx

      if (this.checkCancelCondition(responseText)) {
        this.telegramClient.removeConversation(waitMessageCtx.chatId)

        this.telegramClient.replyMessage(ctx, this.telegramClient.ruLocale.appointmentCanceled)
        return false
      }

      const checkAnswerResult = this.checkAnswer(waitMessageCtx)

      if (this.checkWriteConversationDataCondition(checkAnswerResult)) {
        // eslint-disable-next-line no-param-reassign
        conversation.data[this.questionAnswerPairName] = checkAnswerResult
      }

      return Boolean(checkAnswerResult)
    })
  }

  checkWriteConversationDataCondition(
    checkAnswerResult: Record<string, any> | boolean | string
  ): boolean {
    if (checkAnswerResult) {
      return true
    }
    return false
  }

  checkCancelCondition(text: string): boolean {
    const {
      appointmentConversation_cancelAppointmentButton,
      appointmentConversation_cancelAppointmentCommand,
    } = this.telegramClient.ruLocale

    return (
      text === appointmentConversation_cancelAppointmentButton ||
      text === appointmentConversation_cancelAppointmentCommand
    )
  }

  abstract sendQuestion(
    ctx: TelegramBotFormattedContextType,
    questionData?: Record<string, any> | number
  ): Promise<void>

  abstract checkAnswer(ctx: TelegramBotFormattedContextType): Record<string, any> | boolean | string
}

export { QuestionAnswerPairAbstractClass }
