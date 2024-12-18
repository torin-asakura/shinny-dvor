import type { ServicesDataToReplaceType } from '@globals/data'

import { getNavigationData }              from '@globals/data'
import { getBlogPostsData }               from '@globals/data'
import { getAvailableRadiiData }          from '@globals/data'
import { getContactsData }                from '@globals/data'
import { getServicesData }                from '@globals/data'
import { getFragmentsData }               from '@globals/data'
import { getUiData }                      from '@globals/data'
import { getWorkResultsData }             from '@globals/data'
import { getCarBodiesData }               from '@globals/data'

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
