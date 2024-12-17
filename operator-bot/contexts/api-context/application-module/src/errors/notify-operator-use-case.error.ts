import { HttpException } from '@nestjs/common'
import { HttpStatus }    from '@nestjs/common'

export class NotifyOperatorUseCaseError extends HttpException {
  constructor() {
    super(
      'Interfnal server error on api-application, booking-controller',
      HttpStatus.INTERNAL_SERVER_ERROR
    )
  }
}
