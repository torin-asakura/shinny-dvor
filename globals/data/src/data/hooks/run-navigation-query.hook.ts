import { GET_NAVIGATION } from '@globals/data'
import { getClient }      from '@globals/data'

const runNavigationQuery = async () => {
  const client = getClient()

  const { data: navigationData } = await client.query({
    query: GET_NAVIGATION,
  })

  if (navigationData) {
    return {
      navigation: navigationData.navigationItems.nodes,
    }
  }

  return { navigation: [] }
}

export { runNavigationQuery }
