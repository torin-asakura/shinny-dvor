import { gql } from '@apollo/client'

const GET_FRAGMENTS = gql`
  query GetFragments {
    fragments(first: 1000) {
      nodes {
        contentAddons {
          title
          content
          fragmentId
          highlightedtext
        }
      }
    }
  }
`

export { GET_FRAGMENTS }
