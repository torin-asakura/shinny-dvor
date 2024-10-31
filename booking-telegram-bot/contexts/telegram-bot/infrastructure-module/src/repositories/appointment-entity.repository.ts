import type { AppointmentEntity }           from '@booking-telegram-bot/mikro-orm-adapter'
import type { AppointmentEntityRepository } from '@telegram-bot/application-module'

import { Injectable }                       from '@nestjs/common'

import { RequiredEntityData }               from '@booking-telegram-bot/mikro-orm-adapter'
import { MikroORM }                         from '@booking-telegram-bot/mikro-orm-adapter'
import { CreateRequestContext }             from '@booking-telegram-bot/mikro-orm-adapter'

@Injectable()
class AppointmentEntityRepositoryImpl implements AppointmentEntityRepository {
  constructor(private readonly orm: MikroORM) {}

  @CreateRequestContext()
  async getAppointments(): Promise<Array<RequiredEntityData<AppointmentEntity>>> {
    // TODO rename method to get-today-and-tomorrow-appointments

    const milliseconds = Date.now()

    const todayDate = new Date(milliseconds)
    todayDate.setHours(0, 0, 0, 0)

    const todayDateMs = todayDate.getTime()
    const tomorrowDateMs = todayDateMs + 48 * 60 * 60 * 1000

    return this.orm.em.find('AppointmentEntity', {
      timeSlotStart: {
        $gt: BigInt(todayDateMs),
        $lt: BigInt(tomorrowDateMs),
      },
    })
  }

  @CreateRequestContext()
  async writeData(appointmentData: RequiredEntityData<AppointmentEntity>): Promise<void> {
    this.orm.em.create<AppointmentEntity>('AppointmentEntity', {
      ...appointmentData,
    })

    await this.orm.em.flush()
  }

  @CreateRequestContext()
  async getDataByDay(dayMs: number): Promise<Array<[number, number]>> {
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

export { AppointmentEntityRepositoryImpl }
