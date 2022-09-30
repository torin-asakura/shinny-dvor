import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_CONTACTS = gql`
  query GetContacts {
    contactItems {
      nodes {
        contactAddons {
          address
          email
          linkFb
          linkVk
          telephone
          workinghours
          title
          role
        }
      }
    }
  }
`

const runContactsQuery = async () => {
  const client = getClient()

  const { data: contactsData } = await client.query({
    query: GET_CONTACTS,
  })

  if (contactsData) {
    return {
      contacts: contactsData.contactItems.nodes,
    }
  }

  return { contacts: [] }
}

export { runContactsQuery }
