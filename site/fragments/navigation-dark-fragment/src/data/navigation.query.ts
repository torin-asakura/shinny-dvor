import { gql } from '@apollo/client'

const GET_NAVIGATION = gql`
  query GetNavigation {
    navigationItems {
      nodes {
        title
        content
        contentAddons {
          title
          content
          role
        }
      }
    }
  }
`

export { GET_NAVIGATION }
