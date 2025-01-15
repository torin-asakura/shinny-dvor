import type { FC }                      from 'react'

import type { ContactsPageProps }       from './contacts-page.interfaces.js'

import React                            from 'react'

import { ContactsPageClient }           from './contacts-page.client.js'
import { runContactsPageServerQueries } from './hooks/index.js'

const ContactsPage: FC<ContactsPageProps> = async ({ searchParams }) => {
  const isYandexTurbo = Boolean(searchParams['yandex-turbo'])

  await runContactsPageServerQueries()
  // @ts-expect-error not assignable
  return <ContactsPageClient isYandexTurbo={isYandexTurbo} />
}

export default ContactsPage
