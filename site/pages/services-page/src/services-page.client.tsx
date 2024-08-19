'use client'

import type { ServicesPageClientProps } from './services-page.interface.js'

import { Footer }                       from '@fragments/footer-fragment'
import { Navigation }                   from '@fragments/navigation-fragment'

import React                            from 'react'
import { FC }                           from 'react'

import { AllServices }                  from '@site/all-services-fragment'
import { Column }                       from '@ui/layout'

import { Seo }                          from './seo.component.js'

export const ServicesPageClient: FC<ServicesPageClientProps> = (props) => {
  const { SEO, ogCover, data } = props

  const { fragments, contacts, navigation, availableRadii, services, carBodies } = data

  return (
    <Column width='100%' alignItems='center'>
      <Seo SEO={SEO} ogCover={ogCover} />
      <Navigation
        active={2}
        navigationData={navigation}
        availableRadiiData={availableRadii}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        servicesData={services}
      />
      <AllServices fragmentsData={fragments} servicesData={services} />
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}
