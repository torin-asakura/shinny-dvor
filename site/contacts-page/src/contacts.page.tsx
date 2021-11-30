import React        from 'react'
import { FC }       from 'react'

import { Column }   from '@ui/layout'
import { Header }   from '@site/header-fragment'
import { Footer }   from '@site/footer-fragment'

import { Contacts } from './contacts.component'

const ContactsPage: FC = () => (
  <Column width='100%'>
    <Header />
    <Contacts />
    <Footer />
  </Column>
)

export default ContactsPage
