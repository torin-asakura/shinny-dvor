import { gql } from '@apollo/client'

const GET_SERVICES_SEO = gql`
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

export { GET_SERVICES_SEO }
