import type { FragmentsDataType }      from '@globals/data'
import type { NavigationDataType }     from '@globals/data'
import type { AvailableRadiiDataType } from '@globals/data'
import type { CarBodiesDataType }      from '@globals/data'
import type { ServicesDataType }       from '@globals/data'

export interface NavigationItem {
  contentAddons: {
    title: string
    content: string
  }
}

export interface NavigationProps {
  navigationItemsType?: string
  backgroundColor?: string
  active?: number
  scrollY?: number
  navigationData: NavigationDataType
  availableRadiiData: AvailableRadiiDataType
  fragmentsData: FragmentsDataType
  carBodiesData: CarBodiesDataType
  servicesData: ServicesDataType
}
