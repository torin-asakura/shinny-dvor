import React          from 'react'
import { FC }         from 'react'

import { Column }     from '@ui/layout'
import { Navigation } from '@fragments/navigation-fragment'
import { Footer }     from '@fragments/footer-fragment'

import { Contacts }   from './contacts.component'

const ContactsPage: FC = () => (
  <Column width='100%'>
    <Navigation />
    <Contacts />
    <Footer />
  </Column>
)

export default ContactsPage
