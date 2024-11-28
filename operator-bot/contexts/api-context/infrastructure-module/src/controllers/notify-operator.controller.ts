import { Controller }            from '@nestjs/common'
import { Body }                  from '@nestjs/common'
import { Post }                  from '@nestjs/common'
import { NotifyOperatorUseCase } from '@operator-bot/api-application-module'

import { InternalServerError }   from '../errors/index.js'

@Controller('notify-operator')
export class NotifyOperatorController {
  constructor(private readonly notifyOperatorUseCase: NotifyOperatorUseCase) {}

  @Post()
  async writeData(@Body() body: Body): Promise<number> {
    try {
      return this.notifyOperatorUseCase.process(body)
    } catch (error) {
      throw new InternalServerError()
    }
  }
}
