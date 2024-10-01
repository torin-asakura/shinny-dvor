import { Injectable }           from '@nestjs/common'
import { Logger }               from '@nestjs/common'
import { QueryClientPort }      from '@query-client/application-module'

import { ApolloAdapterService } from '@booking-telegram-bot/apollo-adapter'

@Injectable()
export class QueryClientPortImpl implements QueryClientPort {
  constructor(private readonly queryClient: ApolloAdapterService) {}

  async runQuery(query) {
    return await this.queryClient.runQuery(query)
  }
}
