import { gql }      from '@apollo/client'

import { getRadii } from '@globals/data'

const GET_SERVICES = gql`
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
`

export { GET_SERVICES }
