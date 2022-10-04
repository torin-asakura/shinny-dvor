import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Link }            from '@ui/link'
import { SocialLinks }     from '@ui/social-links'
import { Text }            from '@ui/text'
import { extractFragment } from '@globals/data'

import { ContactsProps }   from './contacts.interface'

const Contacts: FC<ContactsProps> = ({ contactsData }) => {
  const titleObj = extractFragment('contactAddons', 'contactsTitle', contactsData)
  const addressTitleObj = extractFragment('contactAddons', 'addressTitle', contactsData)
  const workingHoursTitleObj = extractFragment('contactAddons', 'workingHoursTitle', contactsData)
  const contactsObj = extractFragment('contactAddons', 'info', contactsData)

  const contactsTitle = titleObj?.title
  const addressTitle = addressTitleObj?.title
  const workingHoursTitle = workingHoursTitleObj?.title
  const address = contactsObj?.address
  const workingHours = contactsObj?.workinghours
  const telephone = contactsObj?.telephone
  const email = contactsObj?.email
  const linkVk = contactsObj?.linkVk
  const linkFb = contactsObj?.linkFb

  return (
    <Column width={['100%', '100%', '1440px']} marginTop={[80, 80, 104]}>
      <Row>
        <Layout flexBasis={[20, 20, 80]} />
        <Column width='100%'>
          <Layout flexBasis={[20, 20, 32]} />
          <Layout>
            <Text fontWeight='bold' fontSize='extra'>
              {contactsTitle}
            </Text>
          </Layout>
          <Layout flexBasis={[24, 24, 48]} />
        </Column>
        <Layout flexBasis={[20, 20, 80]} />
      </Row>
      <Row>
        <Layout flexBasis={[20, 20, 80]} />
        <Row justifyContent='space-between'>
          <Column width='100%' justifyContent='space-between'>
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
          <Column justifyContent='flex-end'>
            <Box display={['none', 'none', 'flex']} width={952} height={480}>
              Map
            </Box>
          </Column>
        </Row>
        <Layout flexBasis={[20, 20, 80]} />
      </Row>
      <Layout flexBasis={[24, 24, 0]} />
      <Box width='100%' height={270} display={['flex', 'flex', 'none']}>
        Map
      </Box>
      <Layout flexBasis={[0, 0, 80]} />
    </Column>
  )
}

export { Contacts }
