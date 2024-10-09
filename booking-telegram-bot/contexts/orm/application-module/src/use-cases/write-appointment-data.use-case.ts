import { Injectable } from '@nestjs/common'

import { OrmPort }    from '../ports/index.js'

@Injectable()
class WriteAppointmentDataUseCase {
  constructor(private readonly orm: OrmPort) {}

  async process(): Promise<void> {
    // console.log('process write appointment date use case')
  }
}

export { WriteAppointmentDataUseCase }
