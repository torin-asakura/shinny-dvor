/* eslint-disable */

import type { FC }                       from 'react'

import type { ContactsInformationProps } from './contacts-information.interface.js'

import { memo }                          from 'react'
import React                             from 'react'

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
    linkVk,
    linkFb,
  } = contactsData

  return (
    <Column width='auto' height='auto' justifyContent='space-between'>
      <Column width='100%'>
        <Layout flexDirection='column'>
          <Row>
            <Text fontWeight='medium'>{addressTitle}</Text>
          </Row>
          <Layout flexBasis={8} />
          <Row>
            <Text fontWeight='regular'>{address}</Text>
          </Row>
          <Layout flexBasis={24} />
          <Row>
            <Text fontWeight='medium'>{workingHoursTitle}</Text>
          </Row>
          <Layout flexBasis={8} />
          <Column height='auto' maxWidth={152}>
            <Text fontWeight='regular' lineHeight='medium'>
              {workingHours.split('|n|')[0]}
            </Text>
            <Text fontWeight='regular' lineHeight='medium'>
              {workingHours.split('|n|')[1]}
            </Text>
          </Column>
          <Layout flexBasis={24} />
          <Row>
            <Text fontWeight='medium'>{contactsTitle}</Text>
          </Row>
          <Layout flexBasis={8} />
          <Column height='auto'>
            <Row>
              <Link href={`tel:${telephone}`}>
                <Text fontWeight='regular'>{telephone}</Text>
              </Link>
            </Row>
            <Layout flexBasis={10} />
            <Row>
              <Link href={`mailto:${email}`}>
                <Text fontWeight='regular'>{email}</Text>
              </Link>
            </Row>
          </Column>
        </Layout>
      </Column>
      <Box display={['none', 'none', 'flex']} width='110px'>
        <SocialLinks linkVk={linkVk} linkFb={linkFb} />
      </Box>
    </Column>
  )
})
