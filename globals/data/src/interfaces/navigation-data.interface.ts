import type { NavigationQueryDataType } from '@globals/data'

type NavigationType = Exclude<NavigationQueryDataType['navigationItems'], null | undefined>
export type NavigationDataType = NavigationType['nodes']
