import { Injectable }   from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'

@Injectable()
export class NotifyClientListener {
  @EventPattern('notify_client')
  async handleOrderCreatedEvent(body: Body) {
    // TODO use case
    console.log('notify-client-event')
    console.log(body)
  }
}
