import type { BookingDataType }        from '../interfaces/index.js'

import { Injectable }                  from '@nestjs/common'

import { AppointmentEntityRepository } from '@telegram-bot/application-module'

import { GetAppointmentsUseCaseError } from '../errors/index.js'

@Injectable()
export class GetAppointmentsUseCase {
  constructor(private readonly appointmentEntityRepository: AppointmentEntityRepository) {}

  async process(): Promise<Array<BookingDataType> | number> {
    try {
      const appointments = await this.appointmentEntityRepository.getAppointments()
      return appointments
    } catch (error) {
      throw new GetAppointmentsUseCaseError('error-message')
    }
  }
}
