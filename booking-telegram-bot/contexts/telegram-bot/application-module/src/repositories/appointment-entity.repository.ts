import type { OrmAppointmentDataType } from '../interfaces/index.js'

export abstract class AppointmentEntityRepository {
  abstract getAppointments(): Promise<Array<OrmAppointmentDataType>>

  abstract writeData(appointmentData: OrmAppointmentDataType): Promise<void>

  abstract getDataByDay(dayMs: number): Promise<Array<[number, number]>>
}
