import type { CreateConversationReturnType }    from '@booking-telegram-bot/tgsnake-adapter'
import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'

import type { TelegramClientPort }              from '../ports/index.js'

import { ruLocale }                             from '../locals/index.js'

class ConversationPart {
  conversationPartName: string

  telegramClient: TelegramClientPort

  constructor(telegramClient: TelegramClientPort) {
    this.telegramClient = telegramClient
  }

  async sendQuestion(
    _ctx: TelegramBotFormattedContextType,
    _questionData?: Record<string, any> | number
  ): Promise<void> {
    throw new Error(`sendQuestion not defined at ${this.conversationPartName}`)
  }

  checkAnswer(_ctx: TelegramBotFormattedContextType): Record<string, any> | boolean | string {
    throw new Error(`checkAnswer not defined at ${this.conversationPartName}`)
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
        waitMessageCtx.replyMessage('Запись отменена')
        this.telegramClient.removeConversation(waitMessageCtx.chatId)
        return true
      }

      const checkAnswerResult = this.checkAnswer(waitMessageCtx)

      if (this.checkWriteConversationDataCondition(checkAnswerResult)) {
        // eslint-disable-next-line no-param-reassign
        conversation.data[this.conversationPartName] = checkAnswerResult
      }

      return Boolean(checkAnswerResult)
    })
  }
}

export { ConversationPart }
