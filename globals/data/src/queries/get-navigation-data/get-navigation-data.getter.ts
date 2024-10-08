/* eslint-disable */

import type { GetNavigationQuery as NavigationQueryDataType } from '@globals/data'

import { useSuspenseQuery }                                   from '@apollo/client'

import { GET_NAVIGATION }                                     from './get-navigation-data.query.js'

const getNavigationData = () => {
  const { data }: { data: NavigationQueryDataType } = useSuspenseQuery(GET_NAVIGATION)

  if (data.navigationItems) {
    return {
      navigation: data.navigationItems.nodes,
    }
  }

  return { navigation: [] }
}

export { getNavigationData }
