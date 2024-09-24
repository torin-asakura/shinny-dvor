import { Injectable }        from '@nestjs/common'

import { GraphqlClientPort } from '../ports/index.js'

@Injectable()
export class RunQueryUseCase {
  constructor(private readonly graphqlClient: GraphqlClientPort) {}

  // TODO interface
  async execute(query: any) {
    return this.graphqlClient.runQuery(query)
  }
}
