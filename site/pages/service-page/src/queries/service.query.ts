import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'
import { getSchema } from '@globals/data'

const getRadii = async () => {
  const { schema } = await getSchema()

  return schema.fields.filter((radius) => radius.name.length <= 3).map((radius) => radius.name)
}

const runServiceQuery = async (uri) => {
  const client = getClient()

  const { data } = await client.query({
    query: gql`
        query GetServiceBy($uri: String!) {
            serviceBy(uri: $uri) {
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
    `,
    variables: { uri },
  })

  if (data) {
    return {
      serviceBy: data.serviceBy,
    }
  }

  return { serviceBy: [] }
}

export { runServiceQuery }
