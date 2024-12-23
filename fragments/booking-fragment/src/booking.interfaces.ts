import { getFragmentsData }      from '@globals/data'
import { getAvailableRadiiData } from '@globals/data'
import { getCarBodiesData }      from '@globals/data'
import { getServicesData }       from '@globals/data'
import { getNavigationData }     from '@globals/data'

type AdditionServiceType = NonNullable<
  NonNullable<NonNullable<ReturnType<typeof getServicesData>['services']>[0]>['servicesParams']
>['additionalservice']

export interface BookingProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  fragmentsData: ReturnType<typeof getFragmentsData>['fragments']
  availableRadiiData: ReturnType<typeof getAvailableRadiiData>['availableRadii']
  carBodiesData: ReturnType<typeof getCarBodiesData>['carBodies']
  servicesData: ReturnType<typeof getServicesData>['services']
  navigationData: ReturnType<typeof getNavigationData>['navigation']
  additionalService?: AdditionServiceType
}
