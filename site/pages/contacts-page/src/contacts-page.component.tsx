import type { ContactsPageProps } from './contacts-page.interfaces.js'

import React                      from 'react'

import { ContactsPageClient }     from './contacts-page.client.js'
import { ContactsPageServer }     from './contacts-page.server.js'

const ContactsPage: ContactsPageProps = async () => {
  const contactsPageData = await ContactsPageServer()
  return <ContactsPageClient {...contactsPageData} />
}

export default ContactsPage
