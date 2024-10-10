// import { AppointmentDataType }  from '@booking-telegram-bot/mikro-orm-adapter'
import type { AppointmentEntity } from '@booking-telegram-bot/mikro-orm-adapter'
import type { OrmPort }           from '@orm-client/application-module'

import { MikroORM }               from '@mikro-orm/core'
import { CreateRequestContext }   from '@mikro-orm/core'
import { Injectable }             from '@nestjs/common'

// TODO из адаптера идет импорт ентити и тут используется
// https://github.com/candify-tech/web/blob/a7221ac09da065a378af652203bfad5a1f0dbca3/applicant/server/core/infrastructure-module/src/repositories/applicant.repository.ts

@Injectable()
class OrmPortimpl implements OrmPort {
  constructor(private readonly orm: MikroORM) {}

  @CreateRequestContext()
  // TODO
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async writeAppointmentData(appointmentData: any): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    this.orm.em.create<AppointmentEntity>('AppointmentEntity', {
      ...appointmentData,
      timeSlot: 12345,
    })

    await this.orm.em.flush()
  }
}

export { OrmPortimpl }
