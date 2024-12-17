import { Injectable }            from '@nestjs/common'
import { OnEvent }               from '@nestjs/event-emitter'

import { NotifyOperatorUseCase } from '@operator-bot/telegram-bot-application-module'

@Injectable()
export class AppointmentCreatedListener {
  constructor(private readonly notifyOperatorUseCase: NotifyOperatorUseCase) {}

  @OnEvent('appointment.created')
  async handleOrderCreatedEvent(body: Body) {
    await this.notifyOperatorUseCase.execute(body)
  }
}
