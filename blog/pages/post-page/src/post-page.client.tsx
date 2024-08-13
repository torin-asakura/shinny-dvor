'use client'

import type { PostPageClientProps } from './post-page.interfaces.js'
import type { FC }                  from 'react'

import React                        from 'react'

import { Article }                  from '@blog/articles-fragment'
import { Footer }                   from '@blog/footer-fragment'
import { Navigation }               from '@blog/navigation-fragment'
import { Column }                   from '@ui/layout'

import { Seo }                      from './seo.component.js'

export const PostPageClient: FC<PostPageClientProps> = (props) => {
  const { ogCover, SEO, data } = props

  const { contacts, postBy, navigation, availableRadii, fragments, carBodies, services } = data

  return (
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
}
