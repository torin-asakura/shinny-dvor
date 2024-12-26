import type { ServicesDataToReplaceType } from '@globals/data'

import { MutableRefObject }               from 'react'

import { getNavigationData }              from '@globals/data'
import { getBlogPostsData }               from '@globals/data'
import { getAvailableRadiiData }          from '@globals/data'
import { getContactsData }                from '@globals/data'
import { getServicesData }                from '@globals/data'
import { getFragmentsData }               from '@globals/data'
import { getUiData }                      from '@globals/data'
import { getWorkResultsData }             from '@globals/data'
import { getCarBodiesData }               from '@globals/data'

export type UseIndexPageClientType = ({
  headerRef,
  isLoaded,
  servicesDataToReplace,
  setActive,
  setScrollY,
}: {
  headerRef: MutableRefObject<HTMLDivElement | null>
  isLoaded: MutableRefObject<boolean>
  servicesDataToReplace: ServicesDataToReplaceType
  setActive: React.Dispatch<React.SetStateAction<number>>
  setScrollY: React.Dispatch<React.SetStateAction<number>>
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
  getObserverOptions: (id: string) => { ref: any }
}
