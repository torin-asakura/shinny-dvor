import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_NAVIGATION = gql`
  query GetNavigation {
    navigationItems {
      nodes {
        contentAddons {
          title
          content
          role
        }
      }
    }
  }
`

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
