import { gql } from '@apollo/client'

const GET_BLOG_INDEX_PAGE_SEO = gql`
  query GetBlogSeo {
    pageBy(uri: "/blog") {
      seo {
        title
        metaDesc
      }
    }
  }
`

export { GET_BLOG_INDEX_PAGE_SEO }
