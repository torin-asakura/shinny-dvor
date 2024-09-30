import { Injectable }                     from '@nestjs/common'

import { AppointmentConversationService } from '../services/index.js'

@Injectable()
export class AppointmentConversationUseCase {
  constructor(private readonly appointmentConversationService: AppointmentConversationService) {}

  // TODO interface
  async process(ctx: any) {
    await this.appointmentConversationService.process(ctx)
  }
}
