import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'
import type { CreateConversationReturnType }    from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetCommentaryQuestionAnswerPart }      from '../services/appointment-conversation/question-answer-pairs/index.js'

@Injectable()
export class AppointmentConversationGetCommentaryUseCase {
  constructor(
    private readonly appointmentGetCommentaryConversationPart: GetCommentaryQuestionAnswerPart
  ) {}

  async process(
    ctx: TelegramBotFormattedContextType,
    conversation: CreateConversationReturnType
  ): Promise<boolean | string> {
    return this.appointmentGetCommentaryConversationPart.process<boolean | string>(
      ctx,
      conversation
    )
  }
}
