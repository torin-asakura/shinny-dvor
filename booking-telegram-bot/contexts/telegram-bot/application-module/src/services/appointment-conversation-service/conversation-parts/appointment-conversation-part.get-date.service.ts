import { Injectable }                     from '@nestjs/common'

import { TelegramClientPort }             from '../../../ports/index.js'
import { ConversationPart }               from '../../conversation-part.class.js'
import { DATE_OPTIONS }                   from '../appointment-conversation.constants.js'
import { DAY_MS }                         from '../appointment-conversation.constants.js'
import { SUGGESTED_DAYS_QUANTITY }        from '../appointment-conversation.constants.js'
import { CANCEL_APPOINTMENT_BUTTON_TEXT } from '../appointment-conversation.constants.js'

// TODO create conversationPart Class with createConversation method

@Injectable()
export class AppointmentGetDateConversationPart extends ConversationPart {
  // TODO types
  suggestedDates: any
  keyboardVariants: any

  conversationPartName: string = 'date'

  constructor(private readonly telegramClient: TelegramClientPort) {
    super()
    this.suggestedDates = this.getSuggestedDates()
    this.keyboardVariants = this.getKeyboardVariants()
  }

  private getSuggestedDates() {
    const suggestedDates = Array.apply(null, Array(SUGGESTED_DAYS_QUANTITY)).map((_, i) => {
      const daysFromNowMs = DAY_MS * i
      const milliseconds = Date.now() + daysFromNowMs
      const suggestedDate = new Date(milliseconds)
      suggestedDate.setHours(0, 0, 0, 0)

      const suggestedDateMs = suggestedDate.getTime()

      let clientText = suggestedDate.toLocaleDateString('ru-RU', DATE_OPTIONS)
      if (!i) clientText += ' (сегодня)'

      return {
        clientText,
        milliseconds: suggestedDateMs,
      }
    })

    return suggestedDates
  }

  private getKeyboardVariants() {
    return this.suggestedDates.map(({ clientText }) => clientText)
  }

  async sendQuestion(ctx) {
    // TODO to locales
    const MESSAGE_TEXT = 'Выберите дату записи'

    await this.telegramClient.sendMessageWithMarkup(ctx, MESSAGE_TEXT, [
      ...this.keyboardVariants,
      CANCEL_APPOINTMENT_BUTTON_TEXT,
    ])
  }

  // TODO to constructor
  private checkCancelCondition(text: string) {
    return text === CANCEL_APPOINTMENT_BUTTON_TEXT || text === '/cancel'
  }

  checkAnswer(ctx) {
    const { message } = ctx
    // TODO нужно выносить метод wait в адаптер?
    // 	он относится к библиотеке, а вызываю я его тут
    const { text: responseText } = message

    // TODO switch case
    // TODO move it into top layer. cancel current operation

    if (this.checkCancelCondition(responseText)) {
      message.reply('Запись отменена')
      return this.telegramClient.removeConversation(ctx)
    } else if (this.keyboardVariants.includes(responseText)) {
      const date = this.suggestedDates.find(({ clientText }) => clientText === responseText)
      return date
    }

    message.reply('Выберите ответ на клавиатуре, либо нажмите /cancel, чтобы отменить запись')
    return false
  }
}
