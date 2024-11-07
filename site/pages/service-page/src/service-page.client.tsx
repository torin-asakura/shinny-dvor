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

export const ServicePageClient: FC<ServicePageClientProps> = ({
  params,
  servicesDataToReplace,
}) => {
  const { uri } = params

  const { navigation } = getNavigationData()
  const { availableRadii } = getAvailableRadiiData()
  const { fragments } = getFragmentsData()
  const { carBodies } = getCarBodiesData()
  const { services: baseServices } = getServicesData()
  const { serviceBy: baseServiceBy } = getServiceByData(uri)
  const { posts } = getBlogPostsData()
  const { contacts } = getContactsData()

  const services = replaceServicePricesHelper(baseServices, servicesDataToReplace)
  const serviceBy = replaceServicePriceHelper(baseServiceBy, servicesDataToReplace)

  return (
    <Column width='100%' alignItems='center'>
      <Navigation
        active={2}
        navigationData={navigation}
        availableRadiiData={availableRadii}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        servicesData={baseServices}
      />
      <Service
        servicesData={services}
        availableRadiiData={availableRadii}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        serviceData={serviceBy}
        navigationData={navigation}
      />
      <Articles fragmentsData={fragments} navigationData={navigation} postsData={posts} />
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}
