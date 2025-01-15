import type { getNavigationData }     from '@globals/data'
import type { getFragmentsData }      from '@globals/data'
import type { getAvailableRadiiData } from '@globals/data'
import type { getCarBodiesData }      from '@globals/data'
import type { getServicesData }       from '@globals/data'

export interface BookingProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  fragmentsData: ReturnType<typeof getFragmentsData>['fragments']
  availableRadiiData: ReturnType<typeof getAvailableRadiiData>['availableRadii']
  carBodiesData: ReturnType<typeof getCarBodiesData>['carBodies']
  servicesData: ReturnType<typeof getServicesData>['services']
  navigationData: ReturnType<typeof getNavigationData>['navigation']
}
