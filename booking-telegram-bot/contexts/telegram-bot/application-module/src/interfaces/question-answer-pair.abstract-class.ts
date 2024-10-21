import type { CreateConversationReturnType }    from '@telegram-bot/application-module'
import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

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
    processData?: Record<'questionData', Record<string, any> | number>
  ): Promise<Type> {
    let outputData

    const questionData = processData?.questionData

    await this.sendQuestion(ctx, questionData)

    await conversation.waitMessage((waitMessageCtx: TelegramBotFormattedContextType) => {
      const { messageText: responseText } = waitMessageCtx

      if (this.checkCancelCondition(responseText)) {
        this.telegramClient.removeConversation(waitMessageCtx.chatId)

        const canceledMessage = this.i18n.getCanceled()
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

  checkWriteConversationDataCondition(
    checkAnswerResult: Record<string, any> | boolean | string
  ): boolean {
    if (checkAnswerResult) {
      return true
    }
    return false
  }

  checkCancelCondition(text: string): boolean {
    const cancelAppointmentButton = this.i18n.getAppointmentConversationCancelAppointmentButton()
    const cancelAppointmentCommand = this.i18n.getAppointmentConversationCancelAppointmentCommand()

    return text === cancelAppointmentButton || text === cancelAppointmentCommand
  }

  abstract sendQuestion(
    ctx: TelegramBotFormattedContextType,
    questionData?: Record<string, any> | number
  ): Promise<void>

  abstract checkAnswer(ctx: TelegramBotFormattedContextType): Record<string, any> | boolean | string
}

export { QuestionAnswerPairAbstractClass }
