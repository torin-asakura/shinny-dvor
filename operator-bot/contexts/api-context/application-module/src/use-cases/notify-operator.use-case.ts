import { Injectable }                 from '@nestjs/common'
import { HttpStatus }                 from '@nestjs/common'

import { NotifyOperatorUseCaseError } from '../errors/index.js'

@Injectable()
export class NotifyOperatorUseCase {
  async process(body: Body): Promise<number> {
    try {
      console.log(body)
      return HttpStatus.OK
    } catch () {
      throw new NotifyOperatorUseCaseError()
    }
  }
}
