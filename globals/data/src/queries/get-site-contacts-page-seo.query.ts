import { gql } from '@apollo/client'

const GET_SITE_CONTACTS_PAGE_SEO = gql`
  query GetContactsSeo {
    pageBy(uri: "/contacts") {
      seo {
        title
        metaDesc
      }
    }
  }
`

export { GET_SITE_CONTACTS_PAGE_SEO }
