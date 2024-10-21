import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'
import type { CreateConversationReturnType }    from '@telegram-bot/application-module'
import type { SelectedDateType }                from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetDateQuestionAnswerPart }            from '../services/appointment-conversation/question-answer-pairs/index.js'

@Injectable()
export class AppointmentConversationGetDateUseCase {
  constructor(private readonly appointmentGetDateConversationPart: GetDateQuestionAnswerPart) {}

  async process(
    ctx: TelegramBotFormattedContextType,
    conversation: CreateConversationReturnType
  ): Promise<SelectedDateType> {
    return this.appointmentGetDateConversationPart.process<SelectedDateType>(ctx, conversation)
  }
}
