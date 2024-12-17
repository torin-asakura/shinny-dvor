import { HttpException } from '@nestjs/common'
import { HttpStatus }    from '@nestjs/common'

export class InternalServerError extends HttpException {
  constructor() {
    super(
      'Interfnal server error on api-ifrastructure, booking-controller',
      HttpStatus.INTERNAL_SERVER_ERROR
    )
  }
}
