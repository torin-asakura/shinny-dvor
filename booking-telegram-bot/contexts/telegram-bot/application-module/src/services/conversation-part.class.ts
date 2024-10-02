import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'

import { TelegramClientPort }                   from '../ports/index.js'
import { ruLocale }                             from '../locals/index.js'

class ConversationPart {
  conversationPartName: string

  async sendQuestion() {}
  async checkAnswer(_: TelegramBotFormattedContextType): Promise<string | boolean> {
    throw new Error(`checkAnswer not defined at ${this.conversationPartName}`)
  }

  constructor(private readonly telegramClient: TelegramClientPort) {}

  checkWriteConversationDataCondition(checkAnswerResult) {
    return checkAnswerResult
  }

  checkCancelCondition(text: string) {
    const { cancelAppointmentButton, cancelAppointmentCommand } = ruLocale.appointmentConversation

    return text === cancelAppointmentButton || text === cancelAppointmentCommand
  }

  // TODO ctx must be formatted ctx
  // TODO conversation must be formatted-conversation
  // TODO processData is optional

  async process(ctx: TelegramBotFormattedContextType, conversation, processData) {
    const questionData = processData?.questionData

    await this.sendQuestion(ctx, questionData)

    await conversation.waitMessage((ctx: TelegramBotFormattedContextType) => {
      const { messageText: responseText } = ctx

      if (this.checkCancelCondition(responseText)) {
        ctx.replyMessage('Запись отменена')
        return this.telegramClient.removeConversation(ctx)
      }

      const checkAnswerResult = this.checkAnswer(ctx)

      if (this.checkWriteConversationDataCondition(checkAnswerResult)) {
        conversation.data[this.conversationPartName] = checkAnswerResult
      }

      return Boolean(checkAnswerResult)
    })
  }
}

export { ConversationPart }
