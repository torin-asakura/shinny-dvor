import type { ArrayElement }     from '@globals/data'

import type { ReturnDataType }   from '../interfaces/index.js'
import type { ReturnTitlesType } from '../interfaces/index.js'

import { Injectable }            from '@nestjs/common'

import { GET_AVAILABLE_RADII }   from '@globals/data'
import { checkArrayLength }      from '@globals/data'

import { ApolloAdapterService }  from './apollo-adapter.service.js'

@Injectable()
class GetRadiiTitlesService {
  constructor(private readonly apolloAdapterService: ApolloAdapterService) {}

  async process(): ReturnTitlesType {
    const radiiData = await this.getRadiiData()
    return radiiData.map(
      (singleRadiiData: ArrayElement<typeof radiiData>) => singleRadiiData.contentAddons.title
    )
  }

  private async getRadiiData(): ReturnDataType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queryData = (await this.apolloAdapterService.runQuery(GET_AVAILABLE_RADII)) as any
    const radiiQueryData: Awaited<ReturnDataType> = queryData.data.availableRadiusItems
      .nodes as Awaited<ReturnDataType>
    checkArrayLength({ radiiQueryData })
    return radiiQueryData
  }
}

export { GetRadiiTitlesService }
