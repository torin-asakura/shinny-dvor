import type { FC }         from 'react'

import React               from 'react'

import { FooterFragment }  from '@google-amp/footer-fragment'
import { HeaderFragment }  from '@google-amp/header-fragment'
import { ServiceFragment } from '@google-amp/service-fragment'

export const ServicesPage: FC = () => (
  <>
    <HeaderFragment />

    <ServiceFragment />
    <ServiceFragment />
    <ServiceFragment />

    <FooterFragment />
  </>
)
