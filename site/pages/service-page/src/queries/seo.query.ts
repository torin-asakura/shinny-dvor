import { gql } from '@apollo/client'

export const GET_SERVICE_SEO = gql`
  query GetServiceSeo($uri: String!) {
    serviceBy(uri: $uri) {
      seo {
        title
        metaDesc
      }
    }
  }
`
