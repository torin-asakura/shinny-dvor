import { Injectable }      from '@nestjs/common'

import { QueryClientPort } from '../ports/index.js'

@Injectable()
export class GetServiceTitlesUseCase {
  constructor(private readonly queryClient: QueryClientPort) {}

  async execute() {
    return this.queryClient.getServiceTitles()
  }
}
