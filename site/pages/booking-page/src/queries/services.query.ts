import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_SERVICES = gql`
  query GetServices {
    ourServiceItems {
      nodes {
        contentAddons {
          title
          role
        }
      }
    }
  }
`

const runServicesQuery = async () => {
  const client = getClient()

  const { data: servicesData } = await client.query({
    query: GET_SERVICES,
  })

  if (servicesData) {
    return {
      services: servicesData.ourServiceItems.nodes,
    }
  }

  return { services: [] }
}

export { runServicesQuery }
