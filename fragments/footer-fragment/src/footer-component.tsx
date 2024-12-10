import type { FooterProps }  from './footer.interface.js'
import type { FC }           from 'react'

import React                 from 'react'
import { memo }              from 'react'

import { Divider }           from '@ui/divider'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { extractFragment }   from '@globals/data'
import { extractFragments }  from '@globals/data'

import { BottomContentPart } from './bottom-content-part/index.js'
import { TopContentPart }    from './top-content-part/index.js'
import { useNavigation }     from './data/index.js'

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
  const adress = contactsObj?.address
  const workingHours = contactsObj?.workinghours
  const linkVk = contactsObj?.linkVk
  const linkTelegram = telegramContanctsObj?.address

  return (
    <Box width='100%' marginTop='auto'>
      <Column width='100%' alignItems='center'>
        <Divider backgroundColor='gray' />
        <Divider backgroundColor='gray' />
        <BottomContentPart
          adress={adress}
          workingHours={workingHours}
          telephone={telephone}
          appointmentPhone={appointmentPhone}
          byObj={byObj}
        />
      </Column>
    </Box>
  )
})

// <TopContentPart
//   linkTelegram={linkTelegram}
//   linkVk={linkVk}
//   navigationItems={navigationItems}
//   mainPage={mainPage}
// />
