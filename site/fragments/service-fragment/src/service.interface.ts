import type { CarBodiesDataType }      from '@globals/data'
import type { ServicesDataType }       from '@globals/data'
import type { NavigationDataType }     from '@globals/data'
import type { AvailableRadiiDataType } from '@globals/data'
import type { ServiceDataType }        from '@globals/data'
import type { FragmentsDataType }      from '@globals/data'

export interface ServiceProps {
  fragmentsData: FragmentsDataType
  carBodiesData: CarBodiesDataType
  servicesData: ServicesDataType
  serviceData: ServiceDataType
  navigationData: NavigationDataType
  availableRadiiData: AvailableRadiiDataType
}

export enum CarBodies {
  PASSENGER = 'passenger',
  JEEP = 'jeep',
  COMMERCIAL = 'commercial',
  MINIVAN = 'minivan',
  MINIBUS = 'minibus',
}

type ServicesParamsType = ServiceDataType['servicesParams']

export type CarBodiesType = ServicesParamsType['bodies']
export type PriceType = ServicesParamsType['price']
export type WorkExamplesType = ServicesParamsType['workexamples']

export type ImageType = globals.NonNullableObject<WorkExamplesType>['firstexample']['image']
export type TitleType = globals.NonNullableObject<WorkExamplesType>['firstexample']['title']

export type WorkExamplesDataType = Array<{
  image: ImageType
  title: TitleType
  price: PriceType
}>
