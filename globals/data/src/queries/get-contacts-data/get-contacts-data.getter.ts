import type { ContactsQueryDataType } from '@globals/data'

import { useSuspenseQuery }           from '@apollo/client'

import { GET_CONTACTS }               from './get-contacts-data.query.js'

const getContactsData = () => {
  const { data }: { data: ContactsQueryDataType } = useSuspenseQuery(GET_CONTACTS)

  if (data.contactItems) {
    return {
      contacts: data.contactItems.nodes,
    }
  }

  return { contacts: [] }
}

export { getContactsData }
