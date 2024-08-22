import { gql } from '@apollo/client'

const GET_BLOG_POST_PAGE_SEO = gql`
  query GetPostSeo($uri: String!) {
    postBy(uri: $uri) {
      seo {
        title
        metaDesc
      }
    }
  }
`

export { GET_BLOG_POST_PAGE_SEO }
