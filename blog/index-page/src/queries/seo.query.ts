import { gql } from '@apollo/client'

export const GET_BLOG_SEO = gql`
  query GetBlogSeo {
    pageBy(uri: "/blog") {
      seo {
        title
        metaDesc
      }
    }
  }
`
