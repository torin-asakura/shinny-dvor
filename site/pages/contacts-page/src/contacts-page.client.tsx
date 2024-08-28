'use client'

import type { FC }                      from 'react'

import type { ContactsPageClientProps } from './contacts-page.interfaces.js'

import React                            from 'react'

import { Footer }                       from '@fragments/footer-fragment'
import { Navigation }                   from '@fragments/navigation-fragment'
import { Contacts }                     from '@site/contacts-fragment'
import { Column }                       from '@ui/layout'

import { Seo }                          from './seo.component.js'

export const ContactsPageClient: FC<ContactsPageClientProps> = (props) => {
  const { ogCover, SEO, data } = props

  const { fragments, contacts, navigation, availableRadii, carBodies, services } = data

  return (
    <Column width='100%' alignItems='center'>
      <Seo ogCover={ogCover} SEO={SEO} />
      <Navigation
        active={2}
        navigationData={navigation}
        availableRadiiData={availableRadii}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        servicesData={services}
      />
      <Contacts fragmentsData={fragments} contactsData={contacts} />
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}
