import type { ContactsProps }  from './contacts.interface.js'
import type { FC }             from 'react'

import React                   from 'react'
import { memo }                from 'react'

import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Map }                 from '@ui/map'
import { Text }                from '@ui/text'

import { ContactsInformation } from './contacts-information/index.js'
import { MapComponent }        from './map/index.js'
import { useContacts }         from './hooks/index.js'

export const Contacts: FC<ContactsProps> = memo((props) => {
  const contactsInformationData = useContacts(props)
  const { contactsTitle } = contactsInformationData

  return (
    <Column
      width='100%'
      maxWidth='1440px'
      marginTop={{ mobile: '80px', tablet: '80px', desktop: '104px' }}
    >
      <Row>
        <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '80px' }} />
        <Column width='100%'>
          <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '32px' }} />
          <Layout>
            <Text fontWeight='bold' fontSize='extra'>
              {contactsTitle}
            </Text>
          </Layout>
          <Layout flexBasis={{ mobile: '24px', tablet: '24px', desktop: '48px' }} />
        </Column>
        <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '80px' }} />
      </Row>
      <Row
        padding={{ mobile: '20px', tablet: '20px', desktop: '80px' }}
        paddingTop='0 !important'
        paddingBottom='0 !important'
        justifyContent='space-between'
      >
        <ContactsInformation contactsData={contactsInformationData} />
        <MapComponent />
      </Row>
      <Layout flexBasis={{ mobile: '24px', tablet: '24px', desktop: 0 }} />
      <Box
        width='100%'
        height='270px'
        display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }}
      >
        <Map width='100%' height='270px' />
      </Box>
      <Layout flexBasis={{ mobile: 0, tablet: 0, desktop: '80px' }} />
    </Column>
  )
})
