import type { AppointmentDataType } from '../interfaces/index.js'

import { Injectable }               from '@nestjs/common'

import { OrmPort }                  from '../ports/index.js'

@Injectable()
class WriteAppointmentDataUseCase {
  constructor(private readonly orm: OrmPort) {}

  async process(appointmentData: Record<string, any>): Promise<void> {
    await this.orm.writeAppointmentData(appointmentData as AppointmentDataType)
  }
}

export { WriteAppointmentDataUseCase }
