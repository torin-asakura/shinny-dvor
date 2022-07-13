import { useQuery }     from '@apollo/client'

import { GET_CONTACTS } from './contacts.query'

const useContacts = () => {
  const { data, error } = useQuery(GET_CONTACTS)

  if (error) {
    throw new Error(error.message)
  }

  return { contacts: data?.contactsFragments.nodes || [] }
}

export { useContacts }
