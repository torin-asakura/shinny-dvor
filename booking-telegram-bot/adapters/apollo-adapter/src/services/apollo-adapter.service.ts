import type { ApolloAdapterInt } from '../interfaces/index.js'
import type { QueryType }        from '../interfaces/index.js'

import { Injectable }            from '@nestjs/common'

import { client }                from '../client/index.js'

@Injectable()
export class ApolloAdapterService implements ApolloAdapterInt {
  async runQuery(query: QueryType): Promise<ReturnType<typeof client.query<any>>> {
    return client.query({ query })
  }
}
