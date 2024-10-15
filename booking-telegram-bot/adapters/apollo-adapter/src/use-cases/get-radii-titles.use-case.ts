import type { ReturnDataType }   from '../interfaces/index.js'
import type { ReturnTitlesType } from '../interfaces/index.js'

import { Injectable }            from '@nestjs/common'

import { GET_AVAILABLE_RADII }   from '@globals/data'
import { checkArrayLength }      from '@globals/data'

import { ApolloAdapterService }  from '../services/index.js'

@Injectable()
export class GetRadiiTitlesUseCase {
  constructor(private readonly apolloAdapterService: ApolloAdapterService) {}

  async process(): ReturnTitlesType {
    const radiiData = await this.getRadiiData()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return radiiData.map((singleRadiiData: any) => singleRadiiData.contentAddons.title)
  }

  private async getRadiiData(): ReturnDataType {
    const queryData = await this.apolloAdapterService.runQuery(GET_AVAILABLE_RADII)
    const radiiQueryData: Awaited<ReturnDataType> = queryData.data.availableRadiusItems
      .nodes as Awaited<ReturnDataType>
    checkArrayLength({ radiiQueryData })
    return radiiQueryData
  }
}
