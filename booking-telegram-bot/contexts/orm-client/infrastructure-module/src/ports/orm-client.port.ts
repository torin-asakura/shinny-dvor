import type { AppointmentDataType } from '@booking-telegram-bot/mikro-orm-adapter'
import type { OrmPort }             from '@orm-client/application-module'

import { Injectable }               from '@nestjs/common'

import { MikroOrmAdapterService }   from '@booking-telegram-bot/mikro-orm-adapter'

@Injectable()
class OrmPortimpl implements OrmPort {
  constructor(private readonly ormClient: MikroOrmAdapterService) {}

  async writeAppointmentData(appointmentData: AppointmentDataType): Promise<boolean> {
    return this.ormClient.writeAppointmentData(appointmentData)
  }
}

export { OrmPortimpl }
