import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'
import type { CreateConversationReturnType }    from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetServiceQuestionAnswerPart }         from '../services/appointment-conversation/question-answer-pairs/index.js'

@Injectable()
export class AppointmentConversationGetServicesUseCase {
  constructor(
    private readonly appointmentGetServicesConversationPart: GetServiceQuestionAnswerPart
  ) {}

  async process(
    ctx: TelegramBotFormattedContextType,
    conversation: CreateConversationReturnType
  ): Promise<string> {
    return this.appointmentGetServicesConversationPart.process<string>(ctx, conversation)
  }
}
