import type { AppointmentEntity } from '@booking-telegram-bot/mikro-orm-adapter'
import type { OrmPort }           from '@orm-client/application-module'

import { RequiredEntityData }     from '@mikro-orm/core'
import { MikroORM }               from '@mikro-orm/core'
import { CreateRequestContext }   from '@mikro-orm/core'
import { Injectable }             from '@nestjs/common'

@Injectable()
class OrmPortimpl implements OrmPort {
  constructor(private readonly orm: MikroORM) {}

  @CreateRequestContext()
  async writeAppointmentData(
    appointmentData: RequiredEntityData<AppointmentEntity>
  ): Promise<void> {
    this.orm.em.create<AppointmentEntity>('AppointmentEntity', {
      ...appointmentData,
    })

    await this.orm.em.flush()
  }

  @CreateRequestContext()
  async getAppointmenstByDay(dayMs: number): Promise<Array<[number, number]>> {
    const appointmentsData: Array<{ timeSlotStart: bigint; timeSlotEnd: bigint }> =
      await this.orm.em.find('AppointmentEntity', {
        timeSlotStart: {
          $gt: BigInt(dayMs),
        },
      })

    return appointmentsData.map(({
      timeSlotStart,
      timeSlotEnd,
    }: {
      timeSlotStart: bigint
      timeSlotEnd: bigint
    }) => [Number(timeSlotStart), Number(timeSlotEnd)])
  }
}

export { OrmPortimpl }
