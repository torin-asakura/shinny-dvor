// move it directive to fragment level
'use client'

import { AllArticles } from '@blog/articles-fragment'
import { Footer }      from '@blog/footer-fragment'
import { Navigation }  from '@blog/navigation-fragment'

import React           from 'react'
import { FC }          from 'react'

import { Column }      from '@ui/layout'

import { Seo }         from './seo.component.js'

interface Props {
  ogCover: string
  SEO: any
  data: any
}

// TODO interfaces
export const IndexPageClient: FC<Props> = ({
  ogCover,
  SEO,
  data: { contacts, posts, navigation, availableRadii, fragments, carBodies, services },
}) => (
  <Column width='100%' alignItems='center'>
    <Seo ogCover={ogCover} SEO={SEO} />
    <Navigation
      availableRadiiData={availableRadii}
      navigationData={navigation}
      fragmentsData={fragments}
      carBodiesData={carBodies}
      servicesData={services}
    />
    <AllArticles fragmentsData={fragments} postsData={posts} />
    <Footer fragmentsData={fragments} contactsData={contacts} />
  </Column>
)
