import { gql } from '@apollo/client'

const GET_SERVICE_SEO = gql`
  query GetServiceSeo($uri: String!) {
    serviceBy(uri: $uri) {
      seo {
        title
        metaDesc
      }
    }
  }
`

export { GET_SERVICE_SEO }
