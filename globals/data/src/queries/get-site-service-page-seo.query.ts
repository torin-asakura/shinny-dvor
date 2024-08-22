import { gql } from '@apollo/client'

const GET_SITE_SERVICE_PAGE_SEO = gql`
  query GetServiceSeo($uri: String!) {
    serviceBy(uri: $uri) {
      seo {
        title
        metaDesc
      }
    }
  }
`

export { GET_SITE_SERVICE_PAGE_SEO }
