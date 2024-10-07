import { Injectable }      from '@nestjs/common'

import { QueryClientPort } from '../ports/index.js'

@Injectable()
export class GetWorkTimeRawStringUseCase {
  constructor(private readonly queryClient: QueryClientPort) {}

  async execute(): Promise<string> {
    return this.queryClient.getWorkTimeRawString()
  }
}
