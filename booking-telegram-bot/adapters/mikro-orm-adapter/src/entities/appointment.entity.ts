import { Entity }                 from '@mikro-orm/core'
import { PrimaryKey }             from '@mikro-orm/core'
import { Property }               from '@mikro-orm/core'

import { APPOINTMENT_TABLE_NAME } from '../constants/index.js'

@Entity({ tableName: APPOINTMENT_TABLE_NAME })
class AppointmentEntity {
  @PrimaryKey()
  id!: number

  @Property()
  telegramUserId!: bigint
}

export { AppointmentEntity }
