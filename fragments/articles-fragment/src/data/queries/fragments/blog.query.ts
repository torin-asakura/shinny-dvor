import { gql } from '@apollo/client'

export const GET_BLOG = gql`
  query GetBlog {
    blogFragments {
      nodes {
        title
        fragmentParams {
          object
        }
      }
    }
  }
`
