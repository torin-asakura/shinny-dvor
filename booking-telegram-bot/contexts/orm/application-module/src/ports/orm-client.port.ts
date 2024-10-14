import type { AppointmentDataType } from '../interfaces/index.js'

abstract class OrmPort {
  abstract writeAppointmentData(appointmentData: AppointmentDataType): Promise<void>
}

export { OrmPort }
