/* eslint-disable */

import type { FC }          from 'react'

import type { FooterProps } from './footer.interface.js'

import { memo }             from 'react'
import React                from 'react'

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

  const telegramContactsObj = extractFragment('contactAddons', 'linkTelegram', contactsData)

  const appointmentPhone = footerObj?.title
  const telephone = contactsObj?.telephone
  const address = contactsObj?.address
  const workingHours = contactsObj?.workinghours
  const linkVk = contactsObj?.linkVk
  const linkTelegram = telegramContactsObj?.address
  const by = new Map()
  by.set('title', byObj?.title)
  by.set('content', byObj?.highlightedtext)
  by.set('link', byObj?.content)

  const { firstPart, secondPart } = stringSeparator(workingHours)

  return (
    <Box width='100%' marginTop='auto'>
      <Column width='100%' alignItems='center'>
        <Divider color='$gray' />
        <Box maxWidth={['100%', '100%', 1440]} width='100%'>
          <Layout flexBasis={[20, 20, 80]} flexShrink='0' />
          <Column width='100%'>
            <Layout flexBasis={[24, 24, 40]} />
            <Row justifyContent='space-between' alignItems='center'>
              <Box width='100%'>
                <FooterLogo path={mainPage?.content} />
                <Box display={['none', 'none', 'flex']} width={392} alignItems='center'>
                  <Layout flexBasis={60} />
                  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
                    {navigationItems.map(({
                      contentAddons: { title, content },
                    }: {
                      contentAddons: { title: string; content: string }
                    }) => (
                      <NextNavLink key={title} path={content}>
                        <Text fontWeight='$medium'>{title}</Text>
                      </NextNavLink>
                    ))}
                  </Box>
                </Box>
              </Box>
              <SocialLinks linkTelegram={linkTelegram} linkVk={linkVk} />
            </Row>
            <Column width='100%' paddingY='$g24' gap='$g20' display={['flex', 'flex', 'none']}>
              {navigationItems.map(({
                contentAddons: { title, content },
              }: {
                contentAddons: { title: string; content: string }
              }) => (
                <Box>
                  <NextNavLink key={title} path={content}>
                    <Text fontWeight='$medium'>{title}</Text>
                  </NextNavLink>
                </Box>
              ))}
            </Column>
          </Column>
          <Layout flexBasis={[20, 20, 80]} flexShrink='0' />
        </Box>

        <Box flexBasis={[0, 0, 32]}></Box>

        <Divider color='$gray' />
        <Box maxWidth={['100%', '100%', 1440]} alignItems='center' width='100%'>
          <Layout flexBasis={[20, 20, 84]} flexShrink='0' />
          <Column width='100%'>
            <Layout flexBasis={[24, 24, 32]} />
            <Row
              justifyContent='space-between'
              alignItems='center'
              display={['none', 'none', 'flex']}
            >
              <Box width='50%'>
                <Column width={287}>
                  <Text fontWeight='$medium'>{normalizeString(address)}</Text>
                  <Layout flexBasis={10} />
                  <Row>
                    <Layout>
                      <Text whiteSpace='nowrap' fontSize='$small' color='$darkGray'>
                        {normalizeString(firstPart)}
                      </Text>
                    </Layout>
                    <Layout flexBasis={12} flexShrink='0' />
                    <Layout>
                      <Divider direction='vertical' color='$darkGray' />
                    </Layout>
                    <Layout flexBasis={12} flexShrink='0' />
                    <Layout>
                      <Text whiteSpace='nowrap' fontSize='$small' color='$darkGray'>
                        {normalizeString(secondPart)}
                      </Text>
                    </Layout>
                  </Row>
                </Column>
                <Layout flexBasis={80} />
                <Layout display='flex' flexDirection='column'>
                  <Link href={`tel:${telephone}`}>
                    <Text fontWeight='$medium'>{telephone}</Text>
                  </Link>
                  <Layout flexBasis={8} />
                  <Text fontSize='$small' color='$darkGray'>
                    {appointmentPhone}
                  </Text>
                </Layout>
              </Box>
              <Layout>
                <Text color='$darkGray'>{normalizeString(by.get('content'))}</Text>
                <Space />
                <Link
                  href={by.get('link')}
                  title={normalizeString(by.get('content'))}
                  target='_blank'
                  rel='me'
                >
                  <Text fontWeight='$medium'>{by.get('title')}</Text>
                </Link>
              </Layout>
            </Row>
            <Column justifyContent='space-between' display={['flex', 'flex', 'none']}>
              <Layout>
                <Text fontWeight='$medium'>{normalizeString(address)}</Text>
              </Layout>
              <Layout flexBasis={8} flexShrink='0' />
              <Row>
                <Layout>
                  <Text whiteSpace='nowrap' fontSize='$small' color='$darkGray'>
                    {normalizeString(firstPart)}
                  </Text>
                </Layout>
                <Layout flexBasis={12} flexShrink='0' />
                <Layout>
                  <Divider direction='vertical' color='$darkGray' />
                </Layout>
                <Layout flexBasis={12} flexShrink='0' />
                <Layout>
                  <Text whiteSpace='nowrap' fontSize='$small' color='$darkGray'>
                    {normalizeString(secondPart)}
                  </Text>
                </Layout>
              </Row>
              <Layout flexBasis={24} />
              <Row alignItems='flex-end' justifyContent='space-between'>
                <Column>
                  <Layout>
                    <Link href={`tel:${telephone}`}>
                      <Text fontWeight='$medium'>{telephone}</Text>
                    </Link>
                  </Layout>
                  <Layout flexBasis={8} flexShrink='0' />
                  <Layout>
                    <Text fontSize='$small' color='$darkGray'>
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
                    <Text color='$darkGray'>{normalizeString(by.get('content'))}</Text>
                    <Space />
                    <Text fontWeight='$medium'>{by.get('title')}</Text>
                  </Link>
                </Layout>
              </Row>
            </Column>
            <Layout flexBasis={[24, 24, 32]} flexShrink='0' />
          </Column>
          <Layout flexBasis={[20, 20, 80]} flexShrink='0' />
        </Box>
      </Column>
    </Box>
  )
})
