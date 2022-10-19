import { gql } from '@apollo/client'

export const GET_POST_SEO = gql`
  query GetPostSeo($uri: String!) {
    postBy(uri: $uri) {
      seo {
        title
        metaDesc
      }
    }
  }
`
