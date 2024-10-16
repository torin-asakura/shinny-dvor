import { Injectable } from '@nestjs/common'

import { OrmPort }    from '../ports/index.js'

@Injectable()
class GetAppointmentsByDayUseCase {
  constructor(private readonly orm: OrmPort) {}

  async process(dayMs: number): Promise<Array<[number, number]>> {
    return this.orm.getAppointmenstByDay(dayMs)
  }
}

export { GetAppointmentsByDayUseCase }
