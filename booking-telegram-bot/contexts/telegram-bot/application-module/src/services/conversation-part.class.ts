class ConversationPart {
  conversationPartName: string

  async sendQuestion() {}
  async checkAnswer() {}

  checkAnswerCondition(checkAnswerResult) {
    return checkAnswerResult
  }

  async process(ctx, conversation, processData) {
    const questionData = processData?.questionData

    await this.sendQuestion(ctx, questionData)

    await conversation.wait('msg.text', (ctx) => {
      const checkAnswerResult = this.checkAnswer(ctx)

      // TODO change namings
      // TODO это условия записи в память диалога
      if (this.checkAnswerCondition(checkAnswerResult)) {
        conversation.data[this.conversationPartName] = checkAnswerResult
      }

      // TODO это условия перехода к следующему шагу
      return Boolean(checkAnswerResult)
    })
  }
}

export { ConversationPart }
