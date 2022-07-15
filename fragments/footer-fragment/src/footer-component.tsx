import React               from 'react'
import { FC }              from 'react'

import { Divider }         from '@ui/divider'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { NextLink }        from '@ui/link'
import { Link }            from '@ui/link'
import { FooterLogo }      from '@ui/logo'
import { SocialLinks }     from '@ui/social-links'
import { Text }            from '@ui/text'
import { Space }           from '@ui/text'
import { useData }         from '@globals/data'
import { extractor }       from '@globals/data'
import { normalizeString } from '@shared/utils'

import { stringSeparator } from './helpers'

const Footer: FC = () => {
  const { fragments } = useData()

  const by = new Map()
  let workingHours = ''
  let address = ''
  let telephone = ''
  let appointmentPhone = ''

  if (fragments) {
    address = extractor(fragments?.contacts?.Contacts, 'content', 'address')
    telephone = extractor(fragments?.contacts?.Contacts, 'title', 'telephone')
    appointmentPhone = extractor(fragments?.contacts?.Contacts, 'title', 'appointment-phone')
    workingHours = extractor(fragments?.contacts?.Contacts, 'content', 'working-hours')
    by.set('title', extractor(fragments?.contacts?.Contacts, 'title', 'by'))
    by.set('content', extractor(fragments?.contacts?.Contacts, 'content', 'by'))
  }

  const { firstPart, secondPart } = stringSeparator(workingHours)

  return (
    <Box width='100%' marginTop='auto'>
      <Column width='100%' alignItems='center'>
        <Divider backgroundColor='gray' />
        <Box minWidth={['100%', '100%', '1440px']}>
          <Layout flexBasis={[20, 20, 80]} />
          <Column width='100%'>
            <Layout flexBasis={[24, 24, 40]} />
            <Row justifyContent='space-between' alignItems='center'>
              <Box width='100%' justifyContent='space-between'>
                <FooterLogo />
                <Box display={['none', 'none', 'flex']} width={392} alignItems='center'>
                  <Layout flexBasis={60} />
                  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
                    <NextLink path='/services'>
                      <Layout>
                        <Text color='black' fontWeight='medium'>
                          Услуги
                        </Text>
                      </Layout>
                    </NextLink>
                    <NextLink path='/contacts'>
                      <Layout>
                        <Text color='black' fontWeight='medium'>
                          Контакты
                        </Text>
                      </Layout>
                    </NextLink>
                    <NextLink path='/blog'>
                      <Layout>
                        <Text color='black' fontWeight='medium'>
                          Блог
                        </Text>
                      </Layout>
                    </NextLink>
                  </Box>
                </Box>
              </Box>
              <SocialLinks />
            </Row>
            <Layout flexBasis={[24, 24, 40]} />
            <Box width={90} height={136} display={['flex', 'flex', 'none']}>
              <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
                <NextLink path='/services'>
                  <Layout>
                    <Text color='black' fontWeight='medium'>
                      Услуги
                    </Text>
                  </Layout>
                </NextLink>
                <NextLink path='/contacts'>
                  <Layout>
                    <Text color='black' fontWeight='medium'>
                      Контакты
                    </Text>
                  </Layout>
                </NextLink>
                <NextLink path='/blog'>
                  <Layout>
                    <Text color='black' fontWeight='medium'>
                      Блог
                    </Text>
                  </Layout>
                </NextLink>
              </Box>
            </Box>
          </Column>
          <Layout flexBasis={[20, 20, 80]} />
        </Box>
        <Divider backgroundColor='gray' />
        <Box alignItems='center' minWidth={['100%', '100%', '1440px']}>
          <Layout flexBasis={[20, 20, 84]} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={[24, 24, 32]} />
            <Row
              justifyContent='space-between'
              alignItems='center'
              display={['none', 'none', 'flex']}
            >
              <Box width='50%'>
                <Column width={287}>
                  <Text fontWeight='medium'>{normalizeString(address)}</Text>
                  <Layout flexBasis={10} />
                  <Row>
                    <Layout>
                      <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                        {firstPart}
                      </Text>
                    </Layout>
                    <Layout flexBasis={12} flexShrink={0} />
                    <Layout>
                      <Divider direction='vertical' backgroundColor='darkGray' />
                    </Layout>
                    <Layout flexBasis={12} flexShrink={0} />
                    <Layout>
                      <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                        {normalizeString(secondPart)}
                      </Text>
                    </Layout>
                  </Row>
                </Column>
                <Layout flexBasis={80} />
                <Layout display='flex' flexDirection='column'>
                  <Link href={`tel:${telephone}`}>
                    <Text fontWeight='medium'>{telephone}</Text>
                  </Link>
                  <Layout flexBasis={8} />
                  <Text fontSize='small' color='darkGray'>
                    {appointmentPhone}
                  </Text>
                </Layout>
              </Box>
              <Layout>
                <Text color='darkGray'>{by.get('title')}</Text>
                <Space />
                <Link
                  href='https://torinasakura.name/'
                  title={normalizeString(by.get('content'))}
                  target='_blank'
                  rel='me'
                >
                  <Text fontWeight='medium'>{normalizeString(by.get('content'))}</Text>
                </Link>
              </Layout>
            </Row>
            <Column justifyContent='space-between' display={['flex', 'flex', 'none']}>
              <Layout>
                <Text fontWeight='medium'>{normalizeString(address)}</Text>
              </Layout>
              <Layout flexBasis={8} flexShrink={0} />
              <Row>
                <Layout>
                  <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                    {firstPart}
                  </Text>
                </Layout>
                <Layout flexBasis={12} flexShrink={0} />
                <Layout>
                  <Divider direction='vertical' backgroundColor='darkGray' />
                </Layout>
                <Layout flexBasis={12} flexShrink={0} />
                <Layout>
                  <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                    {normalizeString(secondPart)}
                  </Text>
                </Layout>
              </Row>
              <Layout flexBasis={24} />
              <Row alignItems='flex-end' justifyContent='space-between'>
                <Column>
                  <Layout>
                    <Link href={`tel:${telephone}`}>
                      <Text fontWeight='medium'>{telephone}</Text>
                    </Link>
                  </Layout>
                  <Layout flexBasis={8} flexShrink={0} />
                  <Layout>
                    <Text fontSize='small' color='darkGray'>
                      {appointmentPhone}
                    </Text>
                  </Layout>
                </Column>
                <Layout>
                  <Link
                    href='https://torinasakura.name/'
                    target='_blank'
                    rel='me'
                    title={normalizeString(by.get('content'))}
                  >
                    <Text color='darkGray'>{by.get('title')}</Text>
                    <Space />
                    <Text fontWeight='medium'>{normalizeString(by.get('content'))}</Text>
                  </Link>
                </Layout>
              </Row>
            </Column>
            <Layout flexBasis={[24, 24, 32]} flexShrink={0} />
          </Column>
          <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
        </Box>
      </Column>
    </Box>
  )
}

export { Footer }
