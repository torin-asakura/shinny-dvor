import { gql } from '@apollo/client'

const GET_SITE_SERVICES_PAGE_SEO = gql`
  query GetSiteServicesPageSeo {
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

export { GET_SITE_SERVICES_PAGE_SEO }
