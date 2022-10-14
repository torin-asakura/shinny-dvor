import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_AVAILABLE_RADII = gql`
  query GetAvailableRadii {
    availableRadiusItems {
      nodes {
        contentAddons {
          title
          fragmentId
        }
      }
    }
  }
`

const runAvailableRadiiQuery = async () => {
  const client = getClient()

  const { data: availableRadiiData } = await client.query({
    query: GET_AVAILABLE_RADII,
  })

  if (availableRadiiData) {
    return {
      availableRadii: availableRadiiData.availableRadiusItems.nodes,
    }
  }

  return { availableRadii: [] }
}

export { runAvailableRadiiQuery }
