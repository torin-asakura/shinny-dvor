import { GET_CONTACTS } from '@globals/data'
import { getClient }    from '@globals/data'

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
