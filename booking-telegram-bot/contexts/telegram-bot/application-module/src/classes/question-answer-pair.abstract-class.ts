import type { CreateConversationReturnType }    from '@telegram-bot/application-module'
import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import type { TelegramClientPort }              from '../ports/index.js'

// TODO импорт через инфраструктуру?
import { ruLocale }                             from '../locals/index.js'

abstract class QuestionAnswerPair {
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

        // TODO locales
        this.telegramClient.replyMessage(ctx, 'Запись отменена')
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
    const { cancelAppointmentButton, cancelAppointmentCommand } = ruLocale.appointmentConversation

    return text === cancelAppointmentButton || text === cancelAppointmentCommand
  }

  abstract sendQuestion(
    ctx: TelegramBotFormattedContextType,
    questionData?: Record<string, any> | number
  ): Promise<void>

  abstract checkAnswer(ctx: TelegramBotFormattedContextType): Record<string, any> | boolean | string
}

export { QuestionAnswerPair }
