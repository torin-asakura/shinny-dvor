import React          from 'react'
import { FC }         from 'react'

import { Contacts }   from '@fragments/contacts-fragment'
import { Footer }     from '@fragments/footer-fragment'
import { Navigation } from '@fragments/navigation-fragment'
import { Column }     from '@ui/layout'

import { Seo }        from './seo.component'

interface Props {
  ogCover: string
  SEO: any
  data: any
}

const ContactsPage: FC<Props> = ({
  ogCover,
  SEO,
  data: { fragments, contacts, navigation, availableRadii, carBodies, services },
}) => (
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

export default ContactsPage
