import type { Body }                   from '@nestjs/common'

import { Injectable }                  from '@nestjs/common'
import { HttpStatus }                  from '@nestjs/common'

import { AppointmentEntityRepository } from '@telegram-bot/application-module'

import { BookingServiceError }         from '../errors/index.js'
import { checkBookingDataHelper }      from '../helpers/index.js'

@Injectable()
export class WriteBookingDataUseCase {
  constructor(private readonly appointmentEntityRepository: AppointmentEntityRepository) {}

  async process(body: Body): Promise<number> {
    if (typeof body === 'string') {
      const parsedBody = (await JSON.parse(body)) as Record<string, unknown>
      const checkedBody = checkBookingDataHelper(parsedBody)
      await this.appointmentEntityRepository.writeData(checkedBody)
      return HttpStatus.OK
    }

    throw new BookingServiceError('body is not string')
  }
}
