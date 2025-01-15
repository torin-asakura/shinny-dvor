'use client'

import type { FC }                      from 'react'

import type { ContactsPageClientProps } from './contacts-page.interfaces.js'

import React                            from 'react'

import { Footer }                       from '@fragments/footer-fragment'
import { Navigation }                   from '@fragments/navigation-fragment'
import { Contacts }                     from '@site/contacts-fragment'
import { Column }                       from '@ui/layout'
import { getFragmentsData }             from '@globals/data'
import { getContactsData }              from '@globals/data'
import { getNavigationData }            from '@globals/data'
import { getAvailableRadiiData }        from '@globals/data'
import { getCarBodiesData }             from '@globals/data'
import { getServicesData }              from '@globals/data'

export const ContactsPageClient: FC<ContactsPageClientProps> = ({ isYandexTurbo }) => {
  const { fragments } = getFragmentsData()
  const { contacts } = getContactsData()
  const { navigation } = getNavigationData()
  const { availableRadii } = getAvailableRadiiData()
  const { carBodies } = getCarBodiesData()
  const { services } = getServicesData()

  return (
    <Column width='100%' alignItems='center'>
      <Navigation
        active={2}
        navigationData={navigation}
        availableRadiiData={availableRadii}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        servicesData={services}
      />
      <Contacts fragmentsData={fragments} contactsData={contacts} isYandexTurbo={isYandexTurbo} />
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}
