import { Controller }            from '@nestjs/common'
import { Body }                  from '@nestjs/common'
import { Post }                  from '@nestjs/common'
import { Inject }                from '@nestjs/common'
import { ClientProxy }           from '@nestjs/microservices'

import { NotifyOperatorUseCase } from '@operator-bot/api-application-module'

import { InternalServerError }   from '../errors/index.js'

@Controller('notify-operator')
export class NotifyOperatorController {
  constructor(
    private readonly notifyOperatorUseCase: NotifyOperatorUseCase,
    @Inject('BOOKING_TELEGRAM_BOT_SERVICE') private client: ClientProxy
  ) {}

  @Post()
  async writeData(@Body() body: Body): Promise<number> {
    try {
      console.log('post on operator bot')
      this.client.emit<number>('appointment_created', body)
      console.log('after emit on operator-bot')
      // TODO this
      // return this.notifyOperatorUseCase.process(body)
    } catch (error) {
      throw new InternalServerError()
    }
  }
}
