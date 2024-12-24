import {FragmentsDataType, getServicesData} from '@globals/data'
import type { AvailableRadiiDataType } from '@globals/data'
import type { CarBodiesDataType }      from '@globals/data'
import type { ServiceDataType }        from '@globals/data'

export interface ExtendedContentAddons {
  contentAddons: {
    title: string
    content: string
    role: string
  }
}

export interface ContentAddons {
  contentAddons: {
    title: string
    role: string
  }
}

export interface InitialProps {
  fragmentsData: FragmentsDataType
  availableRadiiData: AvailableRadiiDataType
  carBodiesData: CarBodiesDataType
  servicesData: ReturnType<typeof getServicesData>['services']
}
