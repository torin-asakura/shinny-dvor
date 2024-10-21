import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'
import type { CreateConversationReturnType }    from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetRadiiQuestionAnswerPart }           from '../services/appointment-conversation/question-answer-pairs/index.js'

@Injectable()
export class AppointmentConversationGetRadiiUseCase {
  constructor(private readonly appointmentGetRadiiConversationPart: GetRadiiQuestionAnswerPart) {}

  async process(
    ctx: TelegramBotFormattedContextType,
    conversation: CreateConversationReturnType
  ): Promise<string> {
    return this.appointmentGetRadiiConversationPart.process<string>(ctx, conversation)
  }
}
