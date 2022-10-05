import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_SERVICES = gql`
  query GetServices {
    ourServiceItems {
      nodes {
        contentAddons {
          title
          content
          role
        }
        servicesParams {
          role
          price
          description
          title
          addon
          image {
            altText
            sourceUrl
          }
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
