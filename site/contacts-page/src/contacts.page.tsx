import React          from 'react'
import { FC }         from 'react'

import { Footer }     from '@fragments/footer-fragment'
import { Navigation } from '@fragments/navigation-fragment'
import { Column }     from '@ui/layout'

import { Contacts }   from './contacts.component'

const ContactsPage: FC = () => (
  <Column width='100%' alignItems='center'>
    <Navigation />
    <Contacts />
    <Footer />
  </Column>
)

export default ContactsPage
