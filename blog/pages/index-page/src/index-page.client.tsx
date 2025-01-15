'use client'

import type { FC }               from 'react'

import type { IndexPageProps }   from './index-page.interfaces.js'

import React                     from 'react'

import { AllArticles }           from '@blog/all-articles-fragment'
import { Footer }                from '@fragments/footer-fragment'
import { Navigation }            from '@fragments/navigation-fragment'
import { Column }                from '@ui/layout'
import { getContactsData }       from '@globals/data'
import { getBlogPostsData }      from '@globals/data'
import { getNavigationData }     from '@globals/data'
import { getAvailableRadiiData } from '@globals/data'
import { getFragmentsData }      from '@globals/data'
import { getCarBodiesData }      from '@globals/data'
import { getServicesData }       from '@globals/data'

export const IndexPageClient: FC<IndexPageProps> = () => {
  const { contacts } = getContactsData()
  const { posts } = getBlogPostsData()
  const { navigation } = getNavigationData()
  const { availableRadii } = getAvailableRadiiData()
  const { fragments } = getFragmentsData()
  const { carBodies } = getCarBodiesData()
  const { services } = getServicesData()

  return (
    <Column width='100%' alignItems='center'>
      <Navigation
        navigationItemsType='blog-nav-item'
        backgroundColor='white'
        availableRadiiData={availableRadii}
        navigationData={navigation}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        servicesData={services}
      />
      <AllArticles
        // @ts-expect-error undefined not assignable
        fragmentsData={fragments}
        // @ts-expect-error undefined not assignable
        postsData={posts}
      />
      <Footer
        fragmentsData={fragments}
        contactsData={contacts}
        navigationItemsType='blog-nav-item'
      />
    </Column>
  )
}
