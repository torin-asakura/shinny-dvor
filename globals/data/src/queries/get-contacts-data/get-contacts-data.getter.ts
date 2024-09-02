import type { ContactsQueryDataType } from '@globals/data'

import { GET_CONTACTS }               from './get-contacts-data.query.js'

const getContactsData = async (client, context) => {
  const { data }: { data: ContactsQueryDataType } = await client.query({
    query: GET_CONTACTS,
    context,
  })

  if (data.contactItems) {
    return {
      contacts: data.contactItems.nodes,
    }
  }

  return { contacts: [] }
}

export { getContactsData }
