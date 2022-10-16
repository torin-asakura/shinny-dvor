import { gql } from '@apollo/client'

export const GET_SERVICES_SEO = gql`
  query GetServicesSeo {
    pages(where: { name: "services" }) {
      nodes {
        seo {
          metaDesc
          title
        }
      }
    }
  }
`
