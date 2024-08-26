import type { NavigationQueryDataType } from '@globals/data/interfaces'

import { GET_NAVIGATION }               from '@globals/data'
import { getClient }                    from '@globals/data'

const getNavigationData = async () => {
  const client = getClient()

  const { data }: { data: NavigationQueryDataType } = await client.query({
    query: GET_NAVIGATION,
  })

  if (data.navigationItems) {
    return {
      navigation: data.navigationItems.nodes,
    }
  }

  return { navigation: [] }
}

export { getNavigationData }
