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
        <Divider backgroundColor='$gray' />
        <Box
          height={400}
          maxWidth={{ mobile: '100%', tablet: '100%', desktop: '1440px' }}
          backgroundColor={['$gray', '$lightGray', '$steel']}
          width='100%'
        ></Box>
      </Column>
    </Box>
  )
})
