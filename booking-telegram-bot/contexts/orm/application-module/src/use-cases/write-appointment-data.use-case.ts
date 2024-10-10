import { Injectable } from '@nestjs/common'

import { OrmPort }    from '../ports/index.js'

@Injectable()
class WriteAppointmentDataUseCase {
  constructor(private readonly orm: OrmPort) {}

  // TODO
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async process(appointmentData: any): Promise<void> {
    await this.orm.writeAppointmentData(appointmentData)
  }
}

export { WriteAppointmentDataUseCase }
