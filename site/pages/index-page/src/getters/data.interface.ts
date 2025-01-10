import type { ServicesDataToReplaceType } from '@globals/data'
import type { getNavigationData }         from '@globals/data'
import type { getBlogPostsData }          from '@globals/data'
import type { getAvailableRadiiData }     from '@globals/data'
import type { getContactsData }           from '@globals/data'
import type { getServicesData }           from '@globals/data'
import type { getFragmentsData }          from '@globals/data'
import type { getUiData }                 from '@globals/data'
import type { getWorkResultsData }        from '@globals/data'
import type { getCarBodiesData }          from '@globals/data'

export type GetData = ({
  servicesDataToReplace,
}: {
  servicesDataToReplace: ServicesDataToReplaceType
}) => {
  navigation: ReturnType<typeof getNavigationData>['navigation']
  fragments: ReturnType<typeof getFragmentsData>['fragments']
  contacts: ReturnType<typeof getContactsData>['contacts']
  posts: ReturnType<typeof getBlogPostsData>['posts']
  availableRadii: ReturnType<typeof getAvailableRadiiData>['availableRadii']
  services: ReturnType<typeof getServicesData>['services']
  ui: ReturnType<typeof getUiData>['ui']
  workResults: ReturnType<typeof getWorkResultsData>['workResults']
  carBodies: ReturnType<typeof getCarBodiesData>['carBodies']
}
