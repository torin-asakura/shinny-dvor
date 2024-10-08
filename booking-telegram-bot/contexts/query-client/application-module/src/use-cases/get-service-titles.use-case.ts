import { Injectable }      from '@nestjs/common'

import { QueryClientPort } from '../ports/index.js'

@Injectable()
export class GetServiceTitlesUseCase {
  constructor(private readonly queryClient: QueryClientPort) {}

  async execute(): Promise<Array<string>> {
    return this.queryClient.getServiceTitles()
  }
}
