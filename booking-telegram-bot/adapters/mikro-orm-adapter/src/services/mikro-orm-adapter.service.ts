import type { AppointmentDataType } from '@booking-telegram-bot/mikro-orm-adapter'

import { Injectable }               from '@nestjs/common'

@Injectable()
class MikroOrmAdapterService {
  async writeAppointmentData(appointmentData: AppointmentDataType): Promise<boolean> {
    // console.log(appointmentData)
    // console.log('mikro-orm-adapter-service-write-appointment-console-log')
    return true
  }
}

export { MikroOrmAdapterService }
