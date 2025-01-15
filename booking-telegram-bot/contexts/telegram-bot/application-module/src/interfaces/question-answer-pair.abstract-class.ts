/* eslint-disable @typescript-eslint/sort-type-constituents */

import type { CreateConversationReturnType }    from '../interfaces/index.js'
import type { TelegramBotFormattedContextType } from '../interfaces/index.js'
import type { TelegramClientPort }              from '../ports/index.js'
import type { I18nPort }                        from '../ports/index.js'

abstract class QuestionAnswerPairAbstractClass {
  questionAnswerPairName!: string

  constructor(
    readonly telegramClient: TelegramClientPort,
    readonly i18n: I18nPort
  ) {}

  async process<Type>(
    ctx: TelegramBotFormattedContextType,
    conversation: CreateConversationReturnType,
    processData?: Record<'questionData', object | number>
  ): Promise<Type> {
    let outputData

    const questionData = processData?.questionData

    await this.sendQuestion(ctx, questionData)

    await conversation.waitMessage((waitMessageCtx: TelegramBotFormattedContextType) => {
      const { messageText: responseText } = waitMessageCtx

      if (this.checkCancelCondition(responseText)) {
        this.telegramClient.removeConversation(waitMessageCtx.chatId)

        const canceledMessage = this.i18n.canceled
        this.telegramClient.replyMessage(ctx, canceledMessage)
        return false
      }

      const checkAnswerResult = this.checkAnswer(waitMessageCtx)

      if (this.checkWriteConversationDataCondition(checkAnswerResult)) {
        // eslint-disable-next-line no-param-reassign
        conversation.data[this.questionAnswerPairName] = checkAnswerResult
      }

      outputData = checkAnswerResult
      return Boolean(checkAnswerResult)
    })

    return outputData as Type
  }

  checkWriteConversationDataCondition(checkAnswerResult: object | boolean | string): boolean {
    if (checkAnswerResult) {
      return true
    }
    return false
  }

  checkCancelCondition(text: string): boolean {
    const cancelAppointmentButton = this.i18n.appointmentConversationCancelAppointmentButton
    const cancelAppointmentCommand = this.i18n.appointmentConversationCancelAppointmentCommand

    return text === cancelAppointmentButton || text === cancelAppointmentCommand
  }

  abstract sendQuestion(
    ctx: TelegramBotFormattedContextType,
    questionData?: object | number
  ): Promise<void>

  abstract checkAnswer(ctx: TelegramBotFormattedContextType): object | boolean | string
}

export { QuestionAnswerPairAbstractClass }
