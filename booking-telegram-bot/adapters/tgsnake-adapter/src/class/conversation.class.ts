class Conversation {
  constructor(chatId, tgsnakeClient) {
    tgsnakeClient.conversation.create(chatId)
  }

  async waitMessage() {}
}

export { Conversation }
