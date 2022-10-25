import { gql }       from '@apollo/client'

import { getClient } from '../../helpers'
import { getSchema } from './schema.query'

const getRadii = async () => {
  const { schema } = await getSchema()

  const filteredService = schema.fields
    .filter((radius) => radius.name.length <= 3)
    .map((radius) => ({
      radius: radius.name,
      body: radius.type.fields
        .map((field) => field.name)
        .filter((name) => name !== 'fieldGroupName'),
    }))

  const services = filteredService.reduce(
    (result, { radius, body }) => ({
      ...result,
      [radius]: `${radius} { ${body} }`,
    }),
    {}
  )

  return Object.values(services)
}

const runServicesQuery = async () => {
  const client = getClient()

  const { data: servicesData } = await client.query({
    query: gql`
        query GetServices {
            services {
                nodes {
                    uri
                    servicesParams {
                        title
                        description
                        fragmentId
                        addon
                        variant
                        averagePrice
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
                            ${await getRadii()}
                        }
                        additionalservice {
                            title
                            price
                        }
                    }
                }
            }
        }
    `,
  })

  if (servicesData) {
    return {
      services: servicesData.services.nodes,
    }
  }

  return { services: [] }
}

export { runServicesQuery }
