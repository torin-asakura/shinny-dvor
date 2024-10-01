import { Injectable }      from '@nestjs/common'

import { QueryClientPort } from '../ports/index.js'

@Injectable()
export class RunQueryUseCase {
  constructor(private readonly queryClient: QueryClientPort) {}

  async execute(query) {
    return this.queryClient.runQuery(query)
  }
}
