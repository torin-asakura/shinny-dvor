/* eslint-disable */

import type { ContactsInformationProps } from './contacts-information.interface.js'
import type { FC }                       from 'react'

import React                             from 'react'
import { memo }                          from 'react'

import { Layout }                        from '@ui/layout'
import { Column }                        from '@ui/layout'
import { Row }                           from '@ui/layout'
import { Box }                           from '@ui/layout'
import { Link }                          from '@ui/link'
import { SocialLinks }                   from '@ui/social-links'
import { Text }                          from '@ui/text'

export const ContactsInformation: FC<ContactsInformationProps> = memo((props) => {
  const { contactsData } = props

  const {
    addressTitle,
    address,
    workingHoursTitle,
    workingHours,
    contactsTitle,
    telephone,
    email,
    linkTelegram,
    linkVk,
  } = contactsData

  return (
    <Column width='auto' height='auto' justifyContent='space-between'>
      <Column width='100%'>
        <Layout flexDirection='column'>
          <Row>
            <Text fontWeight='medium'>{addressTitle}</Text>
          </Row>
          <Layout flexBasis='8px' />
          <Row>
            <Text fontWeight='regular'>{address}</Text>
          </Row>
          <Layout flexBasis='24px' />
          <Row>
            <Text fontWeight='medium'>{workingHoursTitle}</Text>
          </Row>
          <Layout flexBasis='8px' />
          <Column height='auto' maxWidth='152px'>
            <Text fontWeight='regular' lineHeight='medium'>
              {workingHours.split('|n|')[0]}
            </Text>
            <Text fontWeight='regular' lineHeight='medium'>
              {workingHours.split('|n|')[1]}
            </Text>
          </Column>
          <Layout flexBasis='24px' />
          <Row>
            <Text fontWeight='medium'>{contactsTitle}</Text>
          </Row>
          <Layout flexBasis='8px' />
          <Column height='auto'>
            <Row>
              <Link href={`tel:${telephone}`}>
                <Text fontWeight='regular'>{telephone}</Text>
              </Link>
            </Row>
            <Layout flexBasis='10px' />
            <Row>
              <Link href={`mailto:${email}`}>
                <Text fontWeight='regular'>{email}</Text>
              </Link>
            </Row>
          </Column>
        </Layout>
      </Column>
      <Box display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }} width='112px'>
        <SocialLinks linkTelegram={linkTelegram} linkVk={linkVk} />
      </Box>
    </Column>
  )
})
