import type { ApolloAdapterInt } from './apollo-adapter.interfaces.js'

import { Injectable }            from '@nestjs/common'

import { GET_CONTACTS }          from '@globals/data'
import { GET_SERVICES }          from '@globals/data'
import { GET_CAR_BODIES }        from '@globals/data'
import { GET_AVAILABLE_RADII }   from '@globals/data'
import { checkArrayLength }      from '@globals/data'
import { client }                from '@globals/data/apollo-core'

@Injectable()
export class ApolloAdapterService implements ApolloAdapterInt {
  private async runQuery(query) {
    return client.query({ query })
  }

  private async getCarBodiesData() {
    const queryData = await this.runQuery(GET_CAR_BODIES)
    const carBodiesQueryData = queryData.data.carBodyItems.nodes

    checkArrayLength({ carBodiesQueryData })

    return carBodiesQueryData
  }

  async getCarBodyTitles() {
    const carBodiesData = await this.getCarBodiesData()
    return carBodiesData.map((singleCarData: any) => singleCarData.contentAddons.title)
  }

  private async getRadiiData() {
    const queryData = await this.runQuery(GET_AVAILABLE_RADII)
    const radiiQueryData = queryData.data.availableRadiusItems.nodes

    checkArrayLength({ radiiQueryData })

    return radiiQueryData
  }

  async getRadiiTitles() {
    const radiiData = await this.getRadiiData()
    return radiiData.map((singleRadiiData: any) => singleRadiiData.contentAddons.title)
  }

  private async getServicesData() {
    const queryData = await this.runQuery(GET_SERVICES)
    const servicesQueryData = queryData.data.services.nodes
    checkArrayLength({ servicesQueryData })
    return servicesQueryData
  }

  async getServiceTitles() {
    const servicesData = await this.getServicesData()
    return servicesData.map((singleServiceData: any) => singleServiceData.servicesParams.title)
  }

  private async getWorkTimeQueryData() {
    const queryData = await this.runQuery(GET_CONTACTS)
    const workTimeData = queryData.data.contactItems.nodes
    return workTimeData
  }

  async getWorkTimeRawString() {
    const workTimeQueryData = await this.getWorkTimeQueryData()
    return workTimeQueryData[0].contactAddons.workinghours
  }
}
