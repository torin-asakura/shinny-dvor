import type { ReturnWorkTimeDataType } from '../interfaces/index.js'

import { Injectable }                  from '@nestjs/common'

import { GET_CONTACTS }                from '@globals/data'

import { ApolloAdapterService }        from './apollo-adapter.service.js'

@Injectable()
class GetWorkTimeRawStringService {
  constructor(private readonly apolloAdapterService: ApolloAdapterService) {}

  async process(): Promise<string> {
    const workTimeQueryData = await this.getWorkTimeQueryData()
    return workTimeQueryData[0].contactAddons.workinghours
  }

  private async getWorkTimeQueryData(): ReturnWorkTimeDataType {
    const queryData = await this.apolloAdapterService.runQuery(GET_CONTACTS)
    const workTimeData: Awaited<ReturnWorkTimeDataType> = queryData.data.contactItems
      .nodes as Awaited<ReturnWorkTimeDataType>
    return workTimeData
  }
}

export { GetWorkTimeRawStringService }
