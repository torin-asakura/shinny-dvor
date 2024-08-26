import React               from 'react'
import { FC }              from 'react'

import React                   from 'react'
import { memo }                from 'react'

import { ContactsProps }   from './contacts.interface'

const Contacts: FC<ContactsProps> = ({ contactsData, fragmentsData }) => {
  const contactsTitle = extractFragment('contentAddons', 'contacts', fragmentsData).title
  const addressTitle = extractFragment('contentAddons', 'address', fragmentsData).title
  const workingHoursTitle = extractFragment('contentAddons', 'working-hours', fragmentsData).title
  const contactsObj = extractFragment('contactAddons', 'info', contactsData)

const Contacts: FC<ContactsProps> = memo((props) => {
  const contactsInformationData = useContacts(props)
  const { contactsTitle } = contactsInformationData

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
              <Map width='100%' height={480} />
            </Box>
          </Column>
        </Row>
        <Layout flexBasis={[20, 20, 80]} />
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
