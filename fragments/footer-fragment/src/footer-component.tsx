/* eslint-disable */

import type { FooterProps } from './footer.interface.js'
import type { FC }          from 'react'

import React                from 'react'
import { memo }             from 'react'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextNavLink }      from '@ui/link'
import { Link }             from '@ui/link'
import { FooterLogo }       from '@ui/logo'
import { SocialLinks }      from '@ui/social-links'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'
import { extractFragment }  from '@globals/data'
import { extractFragments } from '@globals/data'
import { normalizeString }  from '@shared/utils'

import { useNavigation }    from './data/index.js'
import { stringSeparator }  from './helpers/index.js'

export const Footer: FC<FooterProps> = memo(({
  contactsData,
  fragmentsData,
  navigationItemsType = 'nav-item',
}) => {
  const navigation = useNavigation()

  const byObj = extractFragment('contentAddons', 'by', fragmentsData)
  const contactsObj = extractFragment('contactAddons', 'info', contactsData)
  const footerObj = extractFragment('contentAddons', 'appointment-phone', fragmentsData)
  const navigationItems = extractFragments(navigationItemsType, 'contentAddons', navigation)
  const mainPage = extractFragment('contentAddons', 'main', navigation)

  const telegramContanctsObj = extractFragment('contactAddons', 'linkTelegram', contactsData)

  const appointmentPhone = footerObj?.title
  const telephone = contactsObj?.telephone
  const address = contactsObj?.address
  const workingHours = contactsObj?.workinghours
  const linkVk = contactsObj?.linkVk
  const linkTelegram = telegramContanctsObj?.address
  const by = new Map()
  by.set('title', byObj?.title)
  by.set('content', byObj?.highlightedtext)
  by.set('link', byObj?.content)

  const { firstPart, secondPart } = stringSeparator(workingHours)

  return (
    <Box width='100%' marginTop='auto'>
      <Column width='100%' alignItems='center'>
        <Divider backgroundColor='gray' />
        <Box maxWidth={{ mobile: '100%', tablet: '100%', desktop: '1440px' }} width='100%'>
          <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '80px' }} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={{ mobile: '24px', tablet: '24px', desktop: '40px' }} />
            <Row justifyContent='space-between' alignItems='center'>
              <Box width='100%'>
                <FooterLogo path={mainPage?.content} />
                <Box
                  display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}
                  width='392px'
                  alignItems='center'
                >
                  <Layout flexBasis='60px' />
                  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
                    {navigationItems.map(({
                      contentAddons: { title, content },
                    }: {
                      contentAddons: { title: string; content: string }
                    }) => (
                      <NextNavLink key={title} path={content}>
                        <Text fontWeight='medium'>{title}</Text>
                      </NextNavLink>
                    ))}
                  </Box>
                </Box>
              </Box>
              <SocialLinks linkTelegram={linkTelegram} linkVk={linkVk} />
            </Row>
            <Layout flexBasis={{ mobile: '24px', tablet: '24px', desktop: '40px' }} />
            <Box
              width='90px'
              height='136px'
              display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }}
            >
              <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
                {navigationItems.map(({
                  contentAddons: { title, content },
                }: {
                  contentAddons: { title: string; content: string }
                }) => (
                  <NextNavLink key={title} path={content}>
                    <Layout>
                      <Text color='black' fontWeight='$medium'>
                        {title}
                      </Text>
                    </Layout>
                  </NextNavLink>
                ))}
              </Box>
            </Box>
          </Column>
          <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '80px' }} flexShrink={0} />
        </Box>
        <Divider backgroundColor='gray' />
        <Box
          maxWidth={{ mobile: '100%', tablet: '100%', desktop: '1440px' }}
          alignItems='center'
          width='100%'
        >
          <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '84px' }} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={{ mobile: '24px', tablet: '24px', desktop: '32px' }} />
            <Row
              justifyContent='space-between'
              alignItems='center'
              display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}
            >
              <Box width='50%'>
                <Column width='287px'>
                  <Text fontWeight='medium'>{normalizeString(address)}</Text>
                  <Layout flexBasis='10px' />
                  <Row>
                    <Layout>
                      <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                        {normalizeString(firstPart)}
                      </Text>
                    </Layout>
                    <Layout flexBasis='12px' flexShrink={0} />
                    <Layout>
                      <Divider direction='vertical' backgroundColor='darkGray' />
                    </Layout>
                    <Layout flexBasis='12px' flexShrink={0} />
                    <Layout>
                      <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                        {normalizeString(secondPart)}
                      </Text>
                    </Layout>
                  </Row>
                </Column>
                <Layout flexBasis='80px' />
                <Layout display='flex' flexDirection='column'>
                  <Link href={`tel:${telephone}`}>
                    <Text fontWeight='medium'>{telephone}</Text>
                  </Link>
                  <Layout flexBasis='8px' />
                  <Text fontSize='small' color='darkGray'>
                    {appointmentPhone}
                  </Text>
                </Layout>
              </Box>
              <Layout>
                <Text color='darkGray'>{normalizeString(by.get('content'))}</Text>
                <Space />
                <Link
                  href={by.get('link')}
                  title={normalizeString(by.get('content'))}
                  target='_blank'
                  rel='me'
                >
                  <Text fontWeight='medium'>{by.get('title')}</Text>
                </Link>
              </Layout>
            </Row>
            <Column
              justifyContent='space-between'
              display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }}
            >
              <Layout>
                <Text fontWeight='medium'>{normalizeString(address)}</Text>
              </Layout>
              <Layout flexBasis='8px' flexShrink={0} />
              <Row>
                <Layout>
                  <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                    {normalizeString(firstPart)}
                  </Text>
                </Layout>
                <Layout flexBasis='12px' flexShrink={0} />
                <Layout>
                  <Divider direction='vertical' backgroundColor='darkGray' />
                </Layout>
                <Layout flexBasis='12px' flexShrink={0} />
                <Layout>
                  <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                    {normalizeString(secondPart)}
                  </Text>
                </Layout>
              </Row>
              <Layout flexBasis='24px' />
              <Row alignItems='flex-end' justifyContent='space-between'>
                <Column>
                  <Layout>
                    <Link href={`tel:${telephone}`}>
                      <Text fontWeight='medium'>{telephone}</Text>
                    </Link>
                  </Layout>
                  <Layout flexBasis='8px' flexShrink={0} />
                  <Layout>
                    <Text fontSize='small' color='darkGray'>
                      {appointmentPhone}
                    </Text>
                  </Layout>
                </Column>
                <Layout>
                  <Link
                    href={by.get('link')}
                    target='_blank'
                    rel='me'
                    title={normalizeString(by.get('content'))}
                  >
                    <Text color='darkGray'>{normalizeString(by.get('content'))}</Text>
                    <Space />
                    <Text fontWeight='medium'>{by.get('title')}</Text>
                  </Link>
                </Layout>
              </Row>
            </Column>
            <Layout
              flexBasis={{ mobile: '24px', tablet: '24px', desktop: '32px' }}
              flexShrink={0}
            />
          </Column>
          <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '80px' }} flexShrink={0} />
        </Box>
      </Column>
    </Box>
  )
})
