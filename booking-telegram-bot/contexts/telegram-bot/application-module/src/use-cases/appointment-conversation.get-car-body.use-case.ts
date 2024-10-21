import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'
import type { CreateConversationReturnType }    from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetCarBodyQuestionAnswerPart }         from '../services/appointment-conversation/question-answer-pairs/index.js'

@Injectable()
export class AppointmentConversationGetCarBodyUseCase {
  constructor(
    private readonly appointmentGetCarBodyConversationPart: GetCarBodyQuestionAnswerPart
  ) {}

  async process(
    ctx: TelegramBotFormattedContextType,
    conversation: CreateConversationReturnType
  ): Promise<string> {
    return this.appointmentGetCarBodyConversationPart.process<string>(ctx, conversation)
  }
}
