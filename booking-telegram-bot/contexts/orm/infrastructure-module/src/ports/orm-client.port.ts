import type { OrmPort }         from '@orm-client/application-module'

import { MikroORM }             from '@mikro-orm/core'
import { CreateRequestContext } from '@mikro-orm/core'
import { Injectable }           from '@nestjs/common'

// import { AppointmentDataType }  from '@booking-telegram-bot/mikro-orm-adapter'
import { AppointmentEntity }    from '@booking-telegram-bot/mikro-orm-adapter'

// TODO из адаптера идет импорт ентити и тут используется
// https://github.com/candify-tech/web/blob/a7221ac09da065a378af652203bfad5a1f0dbca3/applicant/server/core/infrastructure-module/src/repositories/applicant.repository.ts

@Injectable()
class OrmPortimpl implements OrmPort {
  constructor(private readonly orm: MikroORM) {}

  @CreateRequestContext()
  // async writeAppointmentData(appointmentData: AppointmentDataType): Promise<void> {
  async writeAppointmentData(): Promise<void> {
    const appointment = Object.assign(new AppointmentEntity(), {
      id: 1234,
      telegramUserId: BigInt(123),
    })

    this.orm.em.persist(appointment)
    await this.orm.em.flush()
  }
}

export { OrmPortimpl }
