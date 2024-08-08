'use client'

import React          from 'react'
import { FC }         from 'react'

import { Article }    from '@blog/articles-fragment'
import { Footer }     from '@blog/footer-fragment'
import { Navigation } from '@blog/navigation-fragment'
import { Column }     from '@ui/layout'

import { Seo }        from './seo.component.js'

interface Props {
  data: any
  ogCover: string
  SEO: {
    title: string
    metaDesc: string
  }
}

// TODO interfaces
export const PostPageClient: FC<Props> = ({
  ogCover,
  SEO,
  data: { contacts, postBy, navigation, availableRadii, fragments, carBodies, services },
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
    <Article postData={postBy} fragmentsData={fragments} />
    <Footer fragmentsData={fragments} contactsData={contacts} />
  </Column>
)
