import { gql } from '@apollo/client'

export const GET_CONTACTS = gql`
  query GetContacts {
    contactsFragments {
      nodes {
        title
        content
        fragmentParams {
          object
        }
      }
    }
  }
`
