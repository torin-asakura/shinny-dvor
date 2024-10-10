import { Injectable } from '@nestjs/common'

import { OrmPort }    from '../ports/index.js'

@Injectable()
class WriteAppointmentDataUseCase {
  constructor(private readonly orm: OrmPort) {}

  async process(): Promise<void> {
    await this.orm.writeAppointmentData({ data: 'test' })
  }
}

export { WriteAppointmentDataUseCase }
