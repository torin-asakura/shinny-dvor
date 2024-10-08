import type { QueryClientPort } from '@query-client/application-module'

import { Injectable }           from '@nestjs/common'

import { ApolloAdapterService } from '@booking-telegram-bot/apollo-adapter'

@Injectable()
export class QueryClientPortImpl implements QueryClientPort {
  constructor(private readonly queryClient: ApolloAdapterService) {}

  async getCarBodyTitles(): Promise<Array<string>> {
    return this.queryClient.getCarBodyTitles()
  }

  async getRadiiTitles(): Promise<Array<string>> {
    return this.queryClient.getRadiiTitles()
  }

  async getServiceTitles(): Promise<Array<string>> {
    return this.queryClient.getServiceTitles()
  }

  async getWorkTimeRawString(): Promise<string> {
    return this.queryClient.getWorkTimeRawString()
  }
}
