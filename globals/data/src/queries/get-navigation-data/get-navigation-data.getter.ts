import type { NavigationQueryDataType } from './get-navigation-data.interface.js'

import { useSuspenseQuery }             from '@apollo/client'

import { GET_NAVIGATION }               from './get-navigation-data.query.js'

const getNavigationData = () => {
  // const { data }: { data: NavigationQueryDataType } = await client.query({
  //   query: GET_NAVIGATION,
  //   context,
  // })

  const { data }: { data: NavigationQueryDataType } = useSuspenseQuery(GET_NAVIGATION)

  if (data.navigationItems) {
    return {
      navigation: data.navigationItems.nodes,
    }
  }

  return { navigation: [] }
}

export { getNavigationData }
