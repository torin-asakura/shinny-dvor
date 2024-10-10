type AppointmentDataType = any

abstract class OrmPort {
  abstract writeAppointmentData(appointmentData: AppointmentDataType): Promise<void>
}

export { OrmPort }
