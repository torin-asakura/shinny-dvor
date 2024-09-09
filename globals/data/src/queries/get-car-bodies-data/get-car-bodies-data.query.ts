import { gql } from '@apollo/client'

const GET_CAR_BODIES = gql`
  query GetCarBodies {
    carBodyItems {
      nodes {
        contentAddons {
          title
          fragmentId
        }
      }
    }
  }
`

export { GET_CAR_BODIES }
