import type { ContactsPageProps }       from './contacts-page.interfaces.js'

import React                            from 'react'

import { ContactsPageClient }           from './contacts-page.client.js'
import { runContactsPageServerQueries } from './hooks/index.js'

const ContactsPage: ContactsPageProps = async () => {
  const serverQueryData = await runContactsPageServerQueries()
  // @ts-expect-error not assignable
  return <ContactsPageClient serverQueryData={serverQueryData} />
}

export default ContactsPage
