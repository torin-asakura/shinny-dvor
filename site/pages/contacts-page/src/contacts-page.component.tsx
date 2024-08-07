import React                  from 'react'
import { FC }                 from 'react'

import { ContactsPageClient } from './contacts-page.client.js'
import { ContactsPageServer } from './contacts-page.server.js'

// TODO interface

// TODO width over 100vw, horizontal scroll - fix it
const ContactsPage: FC<ContactsPageProps> = async () => {
  const contactsPageData = await ContactsPageServer()
  return <ContactsPageClient {...contactsPageData} />
}

export default ContactsPage
