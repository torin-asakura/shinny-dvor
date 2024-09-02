import type { NavigationQueryDataType } from './get-navigation-data.interface.js'

import { GET_NAVIGATION }               from './get-navigation-data.query.js'

const getNavigationData = async (client, context) => {
  const { data }: { data: NavigationQueryDataType } = await client.query({
    query: GET_NAVIGATION,
    context,
  })

  if (data.navigationItems) {
    return {
      navigation: data.navigationItems.nodes,
    }
  }

  return { navigation: [] }
}

export { getNavigationData }
