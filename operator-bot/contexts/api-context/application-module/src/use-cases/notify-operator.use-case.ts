import { Injectable }                 from '@nestjs/common'
import { HttpStatus }                 from '@nestjs/common'
import { EventEmitter2 }              from '@nestjs/event-emitter'

import { NotifyOperatorUseCaseError } from '../errors/index.js'

@Injectable()
export class NotifyOperatorUseCase {
  constructor(private eventEmitter: EventEmitter2) {}

  async process(body: Body): Promise<number> {
    try {
      this.eventEmitter.emit('appointment.created', body)
      return HttpStatus.OK
    } catch (e) {
      throw new NotifyOperatorUseCaseError()
    }
  }
}
