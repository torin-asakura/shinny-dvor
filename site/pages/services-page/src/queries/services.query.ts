import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_SERVICES = gql`
  query GetServices {
    services {
      nodes {
        servicesParams {
          title
          description
          role
          addon
          variant
          image {
            altText
            sourceUrl
          }
          workexamples {
            firstexample {
              title
              image {
                altText
                sourceUrl
              }
            }
            secondexample {
              title
              image {
                altText
                sourceUrl
              }
            }
          }
          price {
            r12
            r13
            r14
            r15
            r16
            r17
            r18
            r19
            r20
            r21
          }
          additionalservice {
            title
            price
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
      services: servicesData.services.nodes,
    }
  }

  return { services: [] }
}

export { runServicesQuery }
