import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_CAR_BODIES = gql`
  query GetCarBodies {
    carBodyItems {
      nodes {
        contentAddons {
          title
          role
        }
      }
    }
  }
`

const runCarBodiesQuery = async () => {
  const client = getClient()

  const { data: carBodiesData } = await client.query({
    query: GET_CAR_BODIES,
  })

  if (carBodiesData) {
    return {
      carBodies: carBodiesData.carBodyItems.nodes,
    }
  }

  return { carBodies: [] }
}

export { runCarBodiesQuery }
