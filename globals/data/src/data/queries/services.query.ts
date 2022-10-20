import { gql }       from '@apollo/client'

import { getClient } from '../../helpers'
import { getSchema } from './schema.query'

const getRadii = async () => {
  const { schema } = await getSchema()

  return schema.fields.filter((radius) => radius.name.length <= 3).map((radius) => radius.name)
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
