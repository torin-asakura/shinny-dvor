import { gql }       from '@apollo/client'

import { getClient } from '../../helpers'
import { getSchema } from './schema.query'

const getRadii = async () => {
  const { schema } = await getSchema()

  return schema.fields.filter((radius) => radius.name.length <= 3).map((radius) => radius.name)
}

const GET_SERVICES = gql`
  query GetServices {
    services {
      nodes {
        servicesParams {
          title
          description
          fragmentId
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
              ${getRadii().then((resp) => resp)}
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
