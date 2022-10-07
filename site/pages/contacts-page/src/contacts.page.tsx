import React          from 'react'
import { FC }         from 'react'

import { Contacts }   from '@fragments/contacts-fragment'
import { Footer }     from '@fragments/footer-fragment'
import { Navigation } from '@fragments/navigation-fragment'
import { Column }     from '@ui/layout'

interface Props {
  data: any
}

const ContactsPage: FC<Props> = ({ data: { fragments, contacts, navigation, availableRadii } }) => (
  <Column width='100%' alignItems='center'>
    <Navigation active={2} navigationData={navigation} availableRadiiData={availableRadii} />
    <Contacts fragmentsData={fragments} contactsData={contacts} />
    <Footer fragmentsData={fragments} contactsData={contacts} />
  </Column>
)

export default ContactsPage
