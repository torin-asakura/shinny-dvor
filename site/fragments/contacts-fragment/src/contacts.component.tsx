import type { ContactsProps }  from './contacts.interface.js'
import type { FC }             from 'react'

import React                   from 'react'
import { useSearchParams }     from 'next/navigation'
import { memo }                from 'react'

import { Condition }           from '@ui/condition'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Map }                 from '@ui/map'
import { Text }                from '@ui/text'

import { ContactsInformation } from './contacts-information/index.js'
import { MapComponent }        from './map/index.js'
import { useContacts }         from './hooks/index.js'

const Contacts: FC<ContactsProps> = memo((props) => {
  const searchParams = useSearchParams()
  const contactsInformationData = useContacts(props)
  const { contactsTitle } = contactsInformationData

  const yandexTurbo = searchParams.get('yandex-turbo')

  return (
    <Column width='100%' maxWidth={1440} marginTop={[80, 80, 104]}>
      <Row paddingX={[20, 20, 80]}>
        <Column width='100%'>
          <Layout flexBasis={[20, 20, 32]} />
          <Text fontWeight='$semiBold' fontSize='$extra'>
            {contactsTitle}
          </Text>
          <Layout flexBasis={[24, 24, 48]} />
        </Column>
      </Row>
      <Row
        paddingRight={[20, 20, 80]}
        paddingLeft={[20, 20, 80]}
        paddingTop='0 !important'
        paddingBottom='0 !important'
        justifyContent='space-between'
      >
        <ContactsInformation contactsData={contactsInformationData} />
        <Condition match={!Boolean(yandexTurbo)}>
          <MapComponent />
        </Condition>
      </Row>
      <Layout flexBasis={[24, 24, 0]} />
      <Box width='100%' height={270} display={['flex', 'flex', 'none']}>
        <Map width='100%' height={270} />
      </Box>
      <Layout flexBasis={[0, 0, 80]} />
    </Column>
  )
})

export { Contacts }
