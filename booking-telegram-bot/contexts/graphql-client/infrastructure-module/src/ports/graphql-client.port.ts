import { ApolloAdapterService } from '@booking-telegram-bot/apollo-adapter'
import { GraphqlClientPort }    from '@graphql-client/application-module'
import { Injectable }           from '@nestjs/common'
import { Logger }               from '@nestjs/common'

@Injectable()
export class GraphqlClientPortImpl implements GraphqlClientPort {
  constructor(private readonly graphqlClient: ApolloAdapterService) {}

  // TODO interfaces
  async runQuery(query: any) {
    return await this.graphqlClient.runQuery(query)
  }
}
