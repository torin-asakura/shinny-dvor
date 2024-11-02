/* eslint-disable */

'use client'

import type { FC }                     from 'react'

import type { ServicePageClientProps } from './service-page.interfaces.js'

import React                           from 'react'

import { Footer }                      from '@fragments/footer-fragment'
import { Navigation }                  from '@fragments/navigation-fragment'
import { Articles }                    from '@site/articles-fragment'
import { Service }                     from '@site/service-fragment'
import { Column }                      from '@ui/layout'
import { getAvailableRadiiData }       from '@globals/data'
import { getContactsData }             from '@globals/data'
import { getServicesData }             from '@globals/data'
import { getServiceByData }            from '@globals/data'
import { getCarBodiesData }            from '@globals/data'
import { getFragmentsData }            from '@globals/data'
import { getNavigationData }           from '@globals/data'
import { getBlogPostsData }            from '@globals/data'
import { replaceServicePricesHelper }  from '@globals/data'
import { replaceServicePriceHelper }   from '@globals/data'

// @ts-expect-error param is not exist
export const ServicePageClient: FC<ServicePageClientProps> = ({ params, aqsiServicesData }) => {
  const { uri } = params

  const { navigation } = getNavigationData()
  const { availableRadii } = getAvailableRadiiData()
  const { fragments } = getFragmentsData()
  const { carBodies } = getCarBodiesData()
  const { services } = getServicesData()
  const { serviceBy } = getServiceByData(uri)
  const { posts } = getBlogPostsData()
  const { contacts } = getContactsData()

  const replacedServicePrices = replaceServicePricesHelper(services, aqsiServicesData)
  const replacedServiceByPrice = replaceServicePriceHelper(serviceBy, aqsiServicesData)

  return (
    <Column width='100%' alignItems='center'>
      <Navigation
        active={2}
        navigationData={navigation}
        availableRadiiData={availableRadii}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        servicesData={services}
      />
      <Service
        servicesData={replacedServicePrices}
        availableRadiiData={availableRadii}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        serviceData={replacedServiceByPrice}
        navigationData={navigation}
      />
      <Articles fragmentsData={fragments} navigationData={navigation} postsData={posts} />
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}
