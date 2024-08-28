import { gql } from '@apollo/client'

const GET_PAGE_SEO = gql`
  query GetPageSeo($uri: String!) {
    postBy(uri: $uri) {
      seo {
        title
        metaDesc
      }
    }
  }
`

export { GET_PAGE_SEO }
