import type { ContactsQueryDataType } from '@globals/data'

import { GET_CONTACTS }               from '@globals/data'
import { getClient }                  from '@globals/data'

const getContactsData = async () => {
  const client = getClient()

  const { data }: { data: ContactsQueryDataType } = await client.query({
    query: GET_CONTACTS,
  })

  if (data.contactItems) {
    return {
      contacts: data.contactItems.nodes,
    }
  }

  return { contacts: [] }
}

export { getContactsData }
