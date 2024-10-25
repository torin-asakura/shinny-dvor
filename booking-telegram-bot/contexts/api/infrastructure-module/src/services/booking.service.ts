import type { Body }                   from '@nestjs/common'

import { Injectable }                  from '@nestjs/common'
import { HttpStatus }                  from '@nestjs/common'

import { AppointmentEntityRepository } from '@telegram-bot/application-module'

import { checkBookingDataHelper }      from '../helpers/index.js'

@Injectable()
export class BookingService {
  constructor(private readonly appointmentEntityRepository: AppointmentEntityRepository) {}

  async writeData(body: Body): Promise<number> {
    if (typeof body === 'string') {
      const parsedBody: Record<string, any> = await JSON.parse(body)
      const checkedBody = checkBookingDataHelper(parsedBody)
      await this.appointmentEntityRepository.writeData(checkedBody)
      return HttpStatus.OK
    }

    throw new Error('body is not string')
  }
}
