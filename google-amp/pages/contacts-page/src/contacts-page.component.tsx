import type { FC }              from 'react'

import React                    from 'react'

import { ContactsInfoFragment } from '@google-amp/contacts-info-fragment'
import { FooterFragment }       from '@google-amp/footer-fragment'
import { HeaderFragment }       from '@google-amp/header-fragment'
import { MapFragment }          from '@google-amp/map-fragment'

export const ContactsPage: FC = () => (
  <>
    <HeaderFragment />
    <ContactsInfoFragment />
    <MapFragment />
    <FooterFragment />
  </>
)
