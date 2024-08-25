import { gql } from '@apollo/client'

const GET_WORK_RESULTS = gql`
  query GetWorkResults {
    workResultItems {
      nodes {
        workResultParams {
          fragmentId
          time
          price
          description
          photos {
            firstPhoto {
              sourceUrl
            }
            secondPhoto {
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export { GET_WORK_RESULTS }
