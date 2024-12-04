import { Injectable }   from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'

@Injectable()
export class AppointmentCreatedListener {
  @EventPattern('appointment_created')
  async handleOrderCreatedEvent(body: Body) {
    console.log('event on booking-telegram-bot')
    console.log(body)
  }
}
