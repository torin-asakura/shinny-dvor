// move it directive to fragment level
'use client'

import { FC }             from 'react'
import React              from 'react'

import { Footer }         from '@fragments/footer-fragment'
import { Navigation }     from '@fragments/navigation-fragment'
import { AllArticles }    from '@blog/articles-fragment'
import { Column }         from '@ui/layout'

import { IndexPageProps } from './index-page.interfaces.js'
import { Seo }            from './seo.component.js'

export const IndexPageClient: FC<IndexPageProps> = (props) => {
  const { ogCover, SEO, data } = props
  const { contacts, posts, navigation, availableRadii, fragments, carBodies, services } = data

  return (
    <Column width='100%' alignItems='center'>
      <Seo ogCover={ogCover} SEO={SEO} />
      <Navigation
        navigationItemsType='blog-nav-item'
        backgroundColor='white'
        availableRadiiData={availableRadii}
        navigationData={navigation}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        servicesData={services}
      />
      <AllArticles fragmentsData={fragments} postsData={posts} />
      <Footer
        fragmentsData={fragments}
        contactsData={contacts}
        navigationItemsType='blog-nav-item'
      />
    </Column>
  )
}
