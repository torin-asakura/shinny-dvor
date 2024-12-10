/* eslint-disable */

import type { FooterProps } from './footer.interface.js'
import type { FC }          from 'react'

import React                from 'react'
import { memo }             from 'react'

import { Divider }          from '@ui/divider'
import { ResponsiveBox }    from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { ResponsiveLayout } from '@ui/layout'
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
    <ResponsiveBox width='100%' marginTop='auto'>
      <Column width='100%' alignItems='center'>
        <Divider backgroundColor='gray' />
        <ResponsiveBox maxWidth={{ mobile: '100%', tablet: '100%', desktop: 1440 }} width='100%'>
          <ResponsiveLayout flexBasis={{ mobile: 20, tablet: 20, desktop: 80 }} flexShrink={0} />
          <Column width='100%'>
            <ResponsiveLayout flexBasis={{ mobile: 24, tablet: 24, desktop: 40 }} />
            <Row justifyContent='space-between' alignItems='center'>
              <ResponsiveBox width='100%'>
                <FooterLogo path={mainPage?.content} />
                <ResponsiveBox
                  display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}
                  width={392}
                  alignItems='center'
                >
                  <ResponsiveLayout flexBasis={60} />
                  <ResponsiveBox width='100%' justifyContent='space-between' flexWrap='wrap'>
                    {navigationItems.map(({
                      contentAddons: { title, content },
                    }: {
                      contentAddons: { title: string; content: string }
                    }) => (
                      <NextNavLink key={title} path={content}>
                        <Text fontWeight='medium'>{title}</Text>
                      </NextNavLink>
                    ))}
                  </ResponsiveBox>
                </ResponsiveBox>
              </ResponsiveBox>
              <SocialLinks linkTelegram={linkTelegram} linkVk={linkVk} />
            </Row>
            <ResponsiveLayout flexBasis={[24, 24, 40]} />
            <ResponsiveBox width={90} height={136} display={['flex', 'flex', 'none']}>
              <ResponsiveBox width='100%' justifyContent='space-between' flexWrap='wrap'>
                {navigationItems.map(({
                  contentAddons: { title, content },
                }: {
                  contentAddons: { title: string; content: string }
                }) => (
                  <NextNavLink key={title} path={content}>
                    <ResponsiveLayout>
                      <Text color='black' fontWeight='$medium'>
                        {title}
                      </Text>
                    </ResponsiveLayout>
                  </NextNavLink>
                ))}
              </ResponsiveBox>
            </ResponsiveBox>
          </Column>
          <ResponsiveLayout flexBasis={{ mobile: 20, tablet: 20, desktop: 80 }} flexShrink={0} />
        </ResponsiveBox>
        <Divider backgroundColor='gray' />
        <ResponsiveBox
          maxWidth={{ mobile: '100%', tablet: '100%', desktop: 1440 }}
          alignItems='center'
          width='100%'
        >
          <ResponsiveLayout flexBasis={{ mobile: 20, tablet: 20, desktop: 84 }} flexShrink={0} />
          <Column width='100%'>
            <ResponsiveLayout flexBasis={{ mobile: 24, tablet: 24, desktop: 32 }} />
            <Row
              justifyContent='space-between'
              alignItems='center'
              display={['none', 'none', 'flex']}
            >
              <ResponsiveBox width='50%'>
                <Column width={287}>
                  <Text fontWeight='medium'>{normalizeString(address)}</Text>
                  <ResponsiveLayout flexBasis={10} />
                  <Row>
                    <ResponsiveLayout>
                      <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                        {normalizeString(firstPart)}
                      </Text>
                    </ResponsiveLayout>
                    <ResponsiveLayout flexBasis={12} flexShrink={0} />
                    <ResponsiveLayout>
                      <Divider direction='vertical' backgroundColor='darkGray' />
                    </ResponsiveLayout>
                    <ResponsiveLayout flexBasis={12} flexShrink={0} />
                    <ResponsiveLayout>
                      <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                        {normalizeString(secondPart)}
                      </Text>
                    </ResponsiveLayout>
                  </Row>
                </Column>
                <ResponsiveLayout flexBasis={80} />
                <ResponsiveLayout display='flex' flexDirection='column'>
                  <Link href={`tel:${telephone}`}>
                    <Text fontWeight='medium'>{telephone}</Text>
                  </Link>
                  <ResponsiveLayout flexBasis={8} />
                  <Text fontSize='small' color='darkGray'>
                    {appointmentPhone}
                  </Text>
                </ResponsiveLayout>
              </ResponsiveBox>
              <ResponsiveLayout>
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
              </ResponsiveLayout>
            </Row>
            <Column justifyContent='space-between' display={['flex', 'flex', 'none']}>
              <ResponsiveLayout>
                <Text fontWeight='medium'>{normalizeString(address)}</Text>
              </ResponsiveLayout>
              <ResponsiveLayout flexBasis={8} flexShrink={0} />
              <Row>
                <ResponsiveLayout>
                  <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                    {normalizeString(firstPart)}
                  </Text>
                </ResponsiveLayout>
                <ResponsiveLayout flexBasis={12} flexShrink={0} />
                <ResponsiveLayout>
                  <Divider direction='vertical' backgroundColor='darkGray' />
                </ResponsiveLayout>
                <ResponsiveLayout flexBasis={12} flexShrink={0} />
                <ResponsiveLayout>
                  <Text whiteSpace='noWrap' fontSize='small' color='darkGray'>
                    {normalizeString(secondPart)}
                  </Text>
                </ResponsiveLayout>
              </Row>
              <ResponsiveLayout flexBasis={24} />
              <Row alignItems='flex-end' justifyContent='space-between'>
                <Column>
                  <ResponsiveLayout>
                    <Link href={`tel:${telephone}`}>
                      <Text fontWeight='medium'>{telephone}</Text>
                    </Link>
                  </ResponsiveLayout>
                  <ResponsiveLayout flexBasis={8} flexShrink={0} />
                  <ResponsiveLayout>
                    <Text fontSize='small' color='darkGray'>
                      {appointmentPhone}
                    </Text>
                  </ResponsiveLayout>
                </Column>
                <ResponsiveLayout>
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
                </ResponsiveLayout>
              </Row>
            </Column>
            <ResponsiveLayout flexBasis={[24, 24, 32]} flexShrink={0} />
          </Column>
          <ResponsiveLayout flexBasis={[20, 20, 80]} flexShrink={0} />
        </ResponsiveBox>
      </Column>
    </ResponsiveBox>
  )
})
