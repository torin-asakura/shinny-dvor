import type { OrmAppointmentDataType } from '../interfaces/index.js'

abstract class OrmPort {
  abstract writeAppointmentData(appointmentData: OrmAppointmentDataType): Promise<void>

  abstract getAppointmenstByDay(dayMs: number): Promise<Array<[number, number]>>
}

export { OrmPort }
