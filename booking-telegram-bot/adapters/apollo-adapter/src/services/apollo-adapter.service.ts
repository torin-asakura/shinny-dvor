import { Injectable } from '@nestjs/common'

import { client }     from '@globals/data/apollo-core'

@Injectable()
export class ApolloAdapterService {
  // TODO interface
  async runQuery(query: any) {
    return client.query({ query })
  }
}
