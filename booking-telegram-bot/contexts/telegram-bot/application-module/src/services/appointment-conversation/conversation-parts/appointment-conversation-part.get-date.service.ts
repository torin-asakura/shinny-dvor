import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'

import { Injectable }                           from '@nestjs/common'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { ConversationPart }                     from '../../conversation-part.class.js'
import { DATE_OPTIONS }                         from '../appointment-conversation.constants.js'
import { DAY_MS }                               from '../appointment-conversation.constants.js'
import { SUGGESTED_DAYS_QUANTITY }              from '../appointment-conversation.constants.js'
import { ruLocale }                             from '../../../locals/index.js'

@Injectable()
export class AppointmentGetDateConversationPart extends ConversationPart {
  suggestedDates

  keyboardVariants

  conversationPartName: string = 'date'

  constructor(telegramClient: TelegramClientPort) {
    super(telegramClient)
    this.suggestedDates = this.getSuggestedDates()
    this.keyboardVariants = this.getKeyboardVariants()
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType): Promise<void> {
    const { selectDateMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectDateMessage, [
      ...this.keyboardVariants,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(
    ctx: TelegramBotFormattedContextType
  ): boolean | { clientText: string; milliseconds: number } {
    const { messageText: responseText } = ctx

    const { missClickMessage } = ruLocale.appointmentConversation

    if (this.keyboardVariants.includes(responseText)) {
      const date = this.suggestedDates.find(({ clientText }) => clientText === responseText)
      if (!date) return false
      return date
    }

    ctx.replyMessage(missClickMessage)
    return false
  }

  private getSuggestedDates(): Array<{ clientText: string; milliseconds: number }> {
    // eslint-disable-next-line prefer-spread
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

  private getKeyboardVariants(): Array<string> {
    return this.suggestedDates.map(({ clientText }) => clientText)
  }
}
