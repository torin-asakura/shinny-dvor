import { gql }      from '@apollo/client'

import { getRadii } from '@globals/data'

const GET_SERVICE_BY = gql`
        query GetServiceBy($uri: String!) {
            serviceBy(uri: $uri) {
                servicesParams {
                    title
                    description
                    fragmentId
                    addon
                    variant
                    bodies
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
`

export { GET_SERVICE_BY }
