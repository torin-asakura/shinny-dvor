import { TelegramClientPort } from '../ports/index.js'
import { ruLocale }           from '../locals/index.js'

class ConversationPart {
  conversationPartName: string

  async sendQuestion() {}
  async checkAnswer() {}

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

  async process(ctx, conversation, processData) {
    const questionData = processData?.questionData

    await this.sendQuestion(ctx, questionData)

    // TODO нужно выносить метод wait в адаптер?
    // 	он относится к библиотеке, а вызываю я его тут
    await conversation.wait('msg.text', (ctx) => {
      const { message } = ctx
      const { text: responseText } = message

      if (this.checkCancelCondition(responseText)) {
        message.reply('Запись отменена')
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
