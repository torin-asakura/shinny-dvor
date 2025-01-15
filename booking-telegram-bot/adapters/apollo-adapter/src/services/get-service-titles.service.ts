import type { ReturnTitlesType }       from '../interfaces/index.js'
import type { ReturnServicesDataType } from '../interfaces/index.js'

import { Injectable }                  from '@nestjs/common'

import { GET_SERVICES }                from '@globals/data'
import { checkArrayLength }            from '@globals/data'

import { ApolloAdapterService }        from '../services/index.js'

@Injectable()
class GetServiceTitlesService {
  constructor(private readonly apolloAdapterService: ApolloAdapterService) {}

  async process(): ReturnTitlesType {
    const servicesData = await this.getServicesData()
    return servicesData.map((singleServiceData) => singleServiceData.servicesParams.title)
  }

  private async getServicesData(): ReturnServicesDataType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queryData = (await this.apolloAdapterService.runQuery(GET_SERVICES)) as any
    const servicesQueryData = queryData.data.services.nodes
    checkArrayLength({ servicesQueryData })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return servicesQueryData
  }
}

export { GetServiceTitlesService }
