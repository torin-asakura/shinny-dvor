import { Entity }                 from '@mikro-orm/core'
import { PrimaryKey }             from '@mikro-orm/core'
import { Property }               from '@mikro-orm/core'

import { APPOINTMENT_TABLE_NAME } from '../constants/index.js'

@Entity({ tableName: APPOINTMENT_TABLE_NAME })
class AppointmentEntity {
  @PrimaryKey()
  id!: number

  @Property({ nullable: true })
  telegramUserId?: bigint

  @Property()
  telegramFullName!: string

  @Property({ nullable: true })
  phone?: string

  @Property({ nullable: true })
  timeSlotStart?: bigint

  @Property({ nullable: true })
  timeSlotEnd?: bigint

  @Property()
  isApproved: boolean = false

  @Property()
  carBody!: string

  @Property()
  radii!: string

  @Property()
  service!: string

  @Property({ nullable: true })
  commentary?: string
}

export { AppointmentEntity }
