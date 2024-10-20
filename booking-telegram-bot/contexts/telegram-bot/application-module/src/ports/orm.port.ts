import type { AppointmentDataType } from '../interfaces/index.js'

abstract class OrmPort {
  abstract writeAppointmentData(appointmentData: AppointmentDataType): Promise<void>

  abstract getAppointmenstByDay(dayMs: number): Promise<Array<[number, number]>>
}

export { OrmPort }
