type AppointmentDataType = any

abstract class OrmPort {
  abstract writeAppointmentData(appointmentData: AppointmentDataType): void
}

export { OrmPort }
