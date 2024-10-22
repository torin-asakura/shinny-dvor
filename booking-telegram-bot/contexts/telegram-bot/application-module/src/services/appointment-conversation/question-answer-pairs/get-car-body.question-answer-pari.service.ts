import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetCarBodyTitlesUseCase }              from '@query-client/application-module'
import { QuestionAnswerPairAbstractClass }      from '@telegram-bot/application-module/interfaces'

import { TelegramClientPort }                   from '../../../ports/index.js'
import { I18nPort }                             from '../../../ports/index.js'

@Injectable()
class GetCarBodyQuestionAnswerPart extends QuestionAnswerPairAbstractClass {
  questionAnswerPairName = 'carBody'

  carBodyTitles: Array<string>

  constructor(
    telegramClient: TelegramClientPort,
    private readonly getCarBodyTitlesUseCase: GetCarBodyTitlesUseCase,
    i18n: I18nPort
  ) {
    super(telegramClient, i18n)
  }

  async sendQuestion(ctx: TelegramBotFormattedContextType): Promise<void> {
    await this.initData()

    const selectCarBodyMessage = this.i18n.appointmentConversationSelectCarBodyMessage
    const cancelAppointmentButton = this.i18n.appointmentConversationCancelAppointmentButton

    await this.telegramClient.sendMessageWithMarkup(ctx, selectCarBodyMessage, [
      ...this.carBodyTitles,
      cancelAppointmentButton,
    ])
  }

  checkAnswer(ctx: TelegramBotFormattedContextType): boolean | string {
    const { messageText: responseText } = ctx

    const missClickMessage = this.i18n.appointmentConversationMissClick

    if (this.carBodyTitles.includes(responseText)) {
      return responseText
    }

    this.telegramClient.replyMessage(ctx, missClickMessage)
    return false
  }

  private async initData(): Promise<void> {
    this.carBodyTitles = await this.getCarBodyTitlesUseCase.execute()
  }
}

export { GetCarBodyQuestionAnswerPart }
