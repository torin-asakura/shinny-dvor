import { Injectable }              from '@nestjs/common'

import { TelegramClientPort }      from '../../../ports/index.js'
import { ConversationPart }        from '../../conversation-part.class.js'
import { DATE_OPTIONS }            from '../appointment-conversation.constants.js'
import { DAY_MS }                  from '../appointment-conversation.constants.js'
import { SUGGESTED_DAYS_QUANTITY } from '../appointment-conversation.constants.js'
import { ruLocale }                from '../../../locals/index.js'

@Injectable()
export class AppointmentGetDateConversationPart extends ConversationPart {
  suggestedDates
  keyboardVariants

  conversationPartName: string = 'date'

  constructor(private readonly telegramClient: TelegramClientPort) {
    // @ts-expect-error arguments
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
    const { selectDateMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectDateMessage, [
      ...this.keyboardVariants,
      cancelAppointmentButton,
    ])
  }

  // @ts-expect-error not assignable
  checkAnswer(ctx) {
    const { message } = ctx
    const { text: responseText } = message

    const { missClickMessage } = ruLocale.appointmentConversation

    if (this.keyboardVariants.includes(responseText)) {
      const date = this.suggestedDates.find(({ clientText }) => clientText === responseText)
      return date
    }

    message.reply(missClickMessage)
    return false
  }
}
