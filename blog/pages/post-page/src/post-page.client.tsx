'use client'

import type { PostPageClientProps } from './post-page.interfaces.js'
import type { FC }                  from 'react'

import React                        from 'react'

import { Article }                  from '@blog/articles-fragment'
import { Footer }                   from '@fragments/footer-fragment'
import { Navigation }               from '@fragments/navigation-fragment'
import { Column }                   from '@ui/layout'
import { getContactsData }          from '@globals/data'
import { getPostData }              from '@globals/data'
import { getNavigationData }        from '@globals/data'
import { getAvailableRadiiData }    from '@globals/data'
import { getFragmentsData }         from '@globals/data'
import { getCarBodiesData }         from '@globals/data'
import { getServicesData }          from '@globals/data'

import { Seo }                      from './seo.component.js'

// @ts-expect-error not exist
export const PostPageClient: FC<PostPageClientProps> = ({ serverQueryData, params }) => {
  const { seoData, ogCover } = serverQueryData
  const { uri } = params

  const { contacts } = getContactsData()
  const { postBy } = getPostData({ uri })
  const { navigation } = getNavigationData()
  const { availableRadii } = getAvailableRadiiData()
  const { fragments } = getFragmentsData()
  const { carBodies } = getCarBodiesData()
  const { services } = getServicesData()

  return (
    <Column width='100%' alignItems='center'>
      <Seo ogCover={ogCover} SEO={seoData} />
      <Navigation
        navigationItemsType='blog-nav-item'
        backgroundColor='white'
        availableRadiiData={availableRadii}
        navigationData={navigation}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        servicesData={services}
      />
      <Article
        postData={postBy}
        // @ts-expect-error undefined
        fragmentsData={fragments}
      />
      <Footer
        fragmentsData={fragments}
        contactsData={contacts}
        navigationItemsType='blog-nav-item'
      />
    </Column>
  )
}
