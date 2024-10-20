import type { AppointmentEntity } from '@booking-telegram-bot/mikro-orm-adapter'
import type { OrmPort }           from '@telegram-bot/application-module'

import { Injectable }             from '@nestjs/common'

import { RequiredEntityData }     from '@booking-telegram-bot/mikro-orm-adapter'
import { MikroORM }               from '@booking-telegram-bot/mikro-orm-adapter'
import { CreateRequestContext }   from '@booking-telegram-bot/mikro-orm-adapter'

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
