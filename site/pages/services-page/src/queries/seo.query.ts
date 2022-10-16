import { gql } from '@apollo/client'

export const GET_SERVICES_SEO = gql`
  query GetServicesSeo {
    pageBy(uri: "/services") {
      seo {
        title
        metaDesc
      }
    }
  }
`
