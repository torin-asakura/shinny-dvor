import { gql } from '@apollo/client'

export const GET_INFOGRAPHICS = gql`
  query GetInfographics {
    infographicFragments {
      nodes {
        title
      }
    }
  }
`
