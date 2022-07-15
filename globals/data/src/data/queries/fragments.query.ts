import { gql } from '@apollo/client'

const GET_FRAGMENTS = gql`
  query GetFragments {
    fragments(first: 1000) {
      nodes {
        title
        content
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        fragmentParams {
          object
          scope
        }
      }
    }
  }
`

export { GET_FRAGMENTS }
