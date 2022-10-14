import { gql } from '@apollo/client'

const GET_NAVIGATION = gql`
  query GetNavigation {
    navigationItems {
      nodes {
        contentAddons {
          title
          content
          fragmentId
        }
      }
    }
  }
`

export { GET_NAVIGATION }
