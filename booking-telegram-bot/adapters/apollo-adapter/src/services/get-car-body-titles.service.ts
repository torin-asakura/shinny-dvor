import type { ArrayElement }     from '@globals/data'

import type { ReturnDataType }   from '../interfaces/index.js'
import type { ReturnTitlesType } from '../interfaces/index.js'

import { Injectable }            from '@nestjs/common'

import { GET_CAR_BODIES }        from '@globals/data'
import { checkArrayLength }      from '@globals/data'

import { ApolloAdapterService }  from './apollo-adapter.service.js'

@Injectable()
class GetCarBodyTitlesService {
  constructor(private readonly apolloAdapterService: ApolloAdapterService) {}

  async process(): ReturnTitlesType {
    const carBodiesData = await this.getCarBodiesData()
    return carBodiesData.map(
      (singleCarData: ArrayElement<typeof carBodiesData>) => singleCarData.contentAddons.title
    )
  }

  private async getCarBodiesData(): ReturnDataType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queryData = (await this.apolloAdapterService.runQuery(GET_CAR_BODIES)) as any
    const carBodiesQueryData: Awaited<ReturnDataType> = queryData.data.carBodyItems
      .nodes as Awaited<ReturnDataType>
    checkArrayLength({ carBodiesQueryData })
    return carBodiesQueryData
  }
}

export { GetCarBodyTitlesService }
