import React          from 'react'
import { FC }         from 'react'

import { Contacts }   from '@fragments/contacts-fragment'
import { Footer }     from '@fragments/footer-fragment'
import { Navigation } from '@fragments/navigation-fragment'
import { Column }     from '@ui/layout'

interface Props {
  data: any
}

const ContactsPage: FC<Props> = ({ data: { footer, contacts, navigation, availableRadii } }) => (
  <Column width='100%' alignItems='center'>
    <Navigation active={2} navigationData={navigation} availableRadiiData={availableRadii} />
    <Contacts contactsData={contacts} />
    <Footer footerData={footer} contactsData={contacts} />
  </Column>
)

export default ContactsPage
