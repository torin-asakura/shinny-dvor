import type { TelegramBotFormattedContextType } from '@telegram-bot/infrastructure-module'

import { Injectable }                           from '@nestjs/common'

import { GetRadiiTitlesUseCase }                from '@query-client/application-module'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { ConversationPart }                     from '../../conversation-part.class.js'
import { ruLocale }                             from '../../../locals/index.js'

@Injectable()
export class AppointmentGetRadiiConversationPart extends ConversationPart {
  radiiTitles: Array<string>

  conversationPartName: string = 'radii'

  constructor(
    telegramClient: TelegramClientPort,
    private readonly getRadiiTitlesUseCase: GetRadiiTitlesUseCase
  ) {
    super(telegramClient)
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType): Promise<void> {
    await this.initData()

    const { selectRadiiMessage, cancelAppointmentButton } = ruLocale.appointmentConversation

    await this.telegramClient.sendMessageWithMarkup(ctx, selectRadiiMessage, [
      ...this.radiiTitles,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    if (this.radiiTitles.includes(responseText)) {
      return responseText
    }

    const { missClickMessage } = ruLocale.appointmentConversation
    ctx.replyMessage(missClickMessage)

    return false
  }

  private async initData(): Promise<void> {
    this.radiiTitles = await this.getRadiiTitlesUseCase.execute()
  }
}
