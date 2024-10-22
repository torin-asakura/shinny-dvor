import type { TelegramBotFormattedContextType } from '@telegram-bot/application-module'
import type { CreateConversationReturnType }    from '@telegram-bot/application-module'
import type { TimeSlotType }                    from '@telegram-bot/application-module/interfaces'

import { Injectable }                           from '@nestjs/common'

import { GetTimeSlotQuestionAnswerPart }        from '../services/appointment-conversation/question-answer-pairs/index.js'

@Injectable()
export class AppointmentConversationGetTimeSlotUseCase {
  constructor(
    private readonly appointmentGetTimeSlotConversationPart: GetTimeSlotQuestionAnswerPart
  ) {}

  async process(
    ctx: TelegramBotFormattedContextType,
    conversation: CreateConversationReturnType,
    selectedDateMs: number
  ): Promise<TimeSlotType> {
    return this.appointmentGetTimeSlotConversationPart.process<TimeSlotType>(ctx, conversation, {
      questionData: selectedDateMs,
    })
  }
}
