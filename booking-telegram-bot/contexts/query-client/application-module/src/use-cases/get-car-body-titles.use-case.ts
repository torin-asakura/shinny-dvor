import { Injectable }      from '@nestjs/common'

import { QueryClientPort } from '../ports/index.js'

@Injectable()
export class GetCarBodyTitlesUseCase {
  constructor(private readonly queryClient: QueryClientPort) {}

  async execute() {
    return this.queryClient.getCarBodyTitles()
  }
}
