import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'
import type { CreateConversationReturnType }    from '@telegram-bot/application-module'
import type { AppointmentDataType }             from '@telegram-bot/application-module'

import { Injectable }                           from '@nestjs/common'

import { GetApprovalQuestionAnswerPair }        from '../services/appointment-conversation/question-answer-pairs/index.js'

@Injectable()
export class AppointmentConversationGetApprovalUseCase {
  constructor(
    private readonly appointmentGetApprovalConversationPart: GetApprovalQuestionAnswerPair
  ) {}

  async process(
    ctx: TelegramBotFormattedContextType,
    conversation: CreateConversationReturnType,
    appointmentData: AppointmentDataType
  ): Promise<void> {
    await this.appointmentGetApprovalConversationPart.process(ctx, conversation, {
      questionData: appointmentData,
    })
  }
}
