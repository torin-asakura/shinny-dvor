import { gql } from '@apollo/client'

// TODO refactor prices

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
          r13 {
            commercial
            jeep
            minibus
            minivan
            passenger
          }
          r14 {
            commercial
            jeep
            minibus
            minivan
            passenger
          }
          r15 {
            commercial
            jeep
            minibus
            minivan
            passenger
          }
          r16 {
            commercial
            jeep
            minibus
            minivan
            passenger
          }
          r17 {
            commercial
            jeep
            minibus
            minivan
            passenger
          }
          r18 {
            commercial
            jeep
            minibus
            minivan
            passenger
          }
          r19 {
            commercial
            jeep
            minibus
            minivan
            passenger
          }
          r20 {
            commercial
            jeep
            minibus
            minivan
            passenger
          }
          r21 {
            commercial
            jeep
            minibus
            minivan
            passenger
          }
          r22 {
            commercial
            jeep
            minibus
            minivan
            passenger
          }
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
