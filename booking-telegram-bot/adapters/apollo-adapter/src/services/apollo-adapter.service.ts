import type { ApolloAdapterInt }       from './apollo-adapter.interfaces.js'
import type { QueryType }              from './apollo-adapter.interfaces.js'
import type { ReturnDataType }         from './apollo-adapter.interfaces.js'
import type { ReturnTitlesType }       from './apollo-adapter.interfaces.js'
import type { ReturnWorkTimeDataType } from './apollo-adapter.interfaces.js'
import type { ReturnServicesDataType } from './apollo-adapter.interfaces.js'

import { Injectable }                  from '@nestjs/common'

import { GET_CONTACTS }                from '@globals/data'
import { GET_SERVICES }                from '@globals/data'
import { GET_CAR_BODIES }              from '@globals/data'
import { GET_AVAILABLE_RADII }         from '@globals/data'
import { checkArrayLength }            from '@globals/data'

import { client }                      from '../client/index.js'

@Injectable()
export class ApolloAdapterService implements ApolloAdapterInt {
  async getCarBodyTitles(): ReturnTitlesType {
    const carBodiesData = await this.getCarBodiesData()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return carBodiesData.map((singleCarData: any) => singleCarData.contentAddons.title)
  }

  async getRadiiTitles(): ReturnTitlesType {
    const radiiData = await this.getRadiiData()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return radiiData.map((singleRadiiData: any) => singleRadiiData.contentAddons.title)
  }

  async getServiceTitles(): ReturnTitlesType {
    const servicesData = await this.getServicesData()
    return servicesData.map((singleServiceData) => singleServiceData.servicesParams.title)
  }

  async getWorkTimeRawString(): Promise<string> {
    const workTimeQueryData = await this.getWorkTimeQueryData()
    return workTimeQueryData[0].contactAddons.workinghours
  }

  private async runQuery(query: QueryType): Promise<ReturnType<typeof client.query<any>>> {
    return client.query({ query })
  }

  private async getCarBodiesData(): ReturnDataType {
    const queryData = await this.runQuery(GET_CAR_BODIES)
    const carBodiesQueryData: Awaited<ReturnDataType> = queryData.data.carBodyItems
      .nodes as Awaited<ReturnDataType>
    checkArrayLength({ carBodiesQueryData })
    return carBodiesQueryData
  }

  private async getRadiiData(): ReturnDataType {
    const queryData = await this.runQuery(GET_AVAILABLE_RADII)
    const radiiQueryData: Awaited<ReturnDataType> = queryData.data.availableRadiusItems
      .nodes as Awaited<ReturnDataType>
    checkArrayLength({ radiiQueryData })
    return radiiQueryData
  }

  private async getServicesData(): ReturnServicesDataType {
    const queryData = await this.runQuery(GET_SERVICES)
    const servicesQueryData = queryData.data.services.nodes
    checkArrayLength({ servicesQueryData })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return servicesQueryData
  }

  private async getWorkTimeQueryData(): ReturnWorkTimeDataType {
    const queryData = await this.runQuery(GET_CONTACTS)
    const workTimeData: Awaited<ReturnWorkTimeDataType> = queryData.data.contactItems
      .nodes as Awaited<ReturnWorkTimeDataType>
    return workTimeData
  }
}
