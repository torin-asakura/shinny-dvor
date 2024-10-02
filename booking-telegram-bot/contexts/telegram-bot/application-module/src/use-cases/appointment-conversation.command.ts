import { Injectable }                     from '@nestjs/common'

import { AppointmentConversationService } from '../services/index.js'

@Injectable()
export class AppointmentConversationCommand {
  constructor(private readonly appointmentConversationService: AppointmentConversationService) {}

  // TODO interface
  // TODO it is must be formatted-telegram-bot-context, cause context layer
  async process(ctx) {
    await this.appointmentConversationService.process(ctx)
  }
}
