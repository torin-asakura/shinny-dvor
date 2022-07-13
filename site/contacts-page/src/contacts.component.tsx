import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Link }            from '@ui/link'
import { SocialLinks }     from '@ui/social-links'
import { Text }            from '@ui/text'
import { extractor }       from '@shared/utils'
import { normalizeString } from '@shared/utils'

import { useContacts }     from './data'

const Contacts: FC = () => {
  const { contacts } = useContacts()

  let title = ''
  let titleTime = ''
  let workingHours = ''
  let email = ''
  let telephone = ''
  const address = {
    title: '',
    content: '',
  }

  if (contacts) {
    email = extractor(contacts, 'title', 'email')
    title = extractor(contacts, 'title', 'title')
    telephone = extractor(contacts, 'title', 'telephone')
    titleTime = extractor(contacts, 'title', 'working-hours')
    workingHours = extractor(contacts, 'content', 'working-hours')
    address.title = extractor(contacts, 'title', 'address')
    address.content = extractor(contacts, 'content', 'address')
  }

  return (
    <Column width={['100%', '100%', '1440px']}>
      <Row>
        <Layout flexBasis={[20, 20, 80]} />
        <Column width='100%'>
          <Layout flexBasis={[20, 20, 32]} />
          <Layout>
            <Text fontWeight='bold' fontSize='extra'>
              {title}
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
                  <Text fontWeight='medium'>{address.title}</Text>
                </Row>
                <Layout flexBasis={8} />
                <Row>
                  <Text fontWeight='regular'>{normalizeString(address.content)}</Text>
                </Row>
                <Layout flexBasis={24} />
                <Row>
                  <Text fontWeight='medium'>{titleTime}</Text>
                </Row>
                <Layout flexBasis={8} />
                <Row maxWidth={152}>
                  <Text fontWeight='regular' lineHeight='medium'>
                    {normalizeString(workingHours)}
                  </Text>
                </Row>
                <Layout flexBasis={24} />
                <Row>
                  <Text fontWeight='medium'>{title}</Text>
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
              <SocialLinks />
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
