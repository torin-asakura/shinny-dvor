import { gql } from '@apollo/client'

const GET_SITE_INDEX_PAGE_SEO = gql`
  query GetIndexSeo {
    pageBy(uri: "/home") {
      seo {
        title
        metaDesc
      }
    }
  }
`

export { GET_SITE_INDEX_PAGE_SEO }
