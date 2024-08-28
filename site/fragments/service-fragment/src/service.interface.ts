import type { FragmentsDataType }      from '@globals/data'
import type { CarBodiesDataType }      from '@globals/data'
import type { ServicesDataType }       from '@globals/data'
import type { ServiceDataType }        from '@globals/data'
import type { NavigationDataType }     from '@globals/data'
import type { AvailableRadiiDataType } from '@globals/data'

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
