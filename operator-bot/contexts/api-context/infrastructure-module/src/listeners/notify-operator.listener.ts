import { Injectable }   from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'

@Injectable()
export class NotifyOperatorListener {
  @EventPattern('notify_operator')
  async handleOrderCreatedEvent(body: Body) {
    // TODO use case
    console.log('notify-operator-event')
    console.log(body)
  }
}
