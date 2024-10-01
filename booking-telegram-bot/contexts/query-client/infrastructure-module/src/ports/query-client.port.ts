import { Injectable }           from '@nestjs/common'
import { Logger }               from '@nestjs/common'
import { QueryClientPort }      from '@query-client/application-module'

import { ApolloAdapterService } from '@booking-telegram-bot/apollo-adapter'

@Injectable()
export class QueryClientPortImpl implements QueryClientPort {
  constructor(private readonly queryClient: ApolloAdapterService) {}

  async getCarBodyTitles() {
    return await this.queryClient.getCarBodyTitles()
  }

  async getRadiiTitles() {
    return await this.queryClient.getRadiiTitles()
  }

  async getServiceTitles() {
    return await this.queryClient.getServiceTitles()
  }

  async getWorkTimeRawString() {
    return await this.queryClient.getWorkTimeRawString()
  }
}
