import type { BookingDataType }   from '../interfaces/index.js'

import { Controller }             from '@nestjs/common'
import { Get }                    from '@nestjs/common'

import { GetAppointmentsUseCase } from '@booking-telegram-bot/api-application-module'

import { InternalServerError }    from '../errors/internal-server.error.js'

// TODO merge it with booking controller. maybe change names
@Controller('get-appointments')
export class AppointmentsController {
  constructor(private readonly getAppointmentsUseCase: GetAppointmentsUseCase) {}

  @Get()
  async getAppointments(): Promise<Array<BookingDataType> | number> {
    try {
      return this.getAppointmentsUseCase.process()
    } catch (error) {
      // TODO error
      throw new InternalServerError()
    }
  }
}
