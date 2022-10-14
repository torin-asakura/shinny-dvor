import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_SERVICES = gql`
  query GetServices {
    services {
      nodes {
        servicesParams {
          title
          fragmentId
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
      services: servicesData.services.nodes,
    }
  }

  return { services: [] }
}

export { runServicesQuery }
