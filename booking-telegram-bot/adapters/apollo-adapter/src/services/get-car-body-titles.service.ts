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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return carBodiesData.map((singleCarData: any) => singleCarData.contentAddons.title)
  }

  private async getCarBodiesData(): ReturnDataType {
    const queryData = await this.apolloAdapterService.runQuery(GET_CAR_BODIES)
    const carBodiesQueryData: Awaited<ReturnDataType> = queryData.data.carBodyItems
      .nodes as Awaited<ReturnDataType>
    checkArrayLength({ carBodiesQueryData })
    return carBodiesQueryData
  }
}

export { GetCarBodyTitlesService }
