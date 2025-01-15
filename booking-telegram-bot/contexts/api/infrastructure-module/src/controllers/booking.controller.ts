import { Controller }              from '@nestjs/common'
import { Body }                    from '@nestjs/common'
import { Post }                    from '@nestjs/common'

import { WriteBookingDataUseCase } from '@booking-telegram-bot/api-application-module'

import { InternalServerError }     from '../errors/internal-server.error.js'

@Controller('booking')
export class BookingController {
  constructor(private readonly writeBookingDataUseCase: WriteBookingDataUseCase) {}

  @Post()
  async writeData(@Body() body: Body): Promise<number> {
    try {
      return await this.writeBookingDataUseCase.process(body)
    } catch {
      throw new InternalServerError()
    }
  }
}
