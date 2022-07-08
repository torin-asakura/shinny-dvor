import { gql } from '@apollo/client'

export const GET_ALL_FRAGMENTS = gql`
  query GetAllFragments {
    allFragment {
      nodes {
        fragments {
          blog
        }
      }
    }
  }
`
