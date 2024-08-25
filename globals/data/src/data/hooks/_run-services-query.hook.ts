import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

import { getRadii }  from './get-radii.hook.js'

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
