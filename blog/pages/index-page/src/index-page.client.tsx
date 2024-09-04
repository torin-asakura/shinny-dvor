// move it directive to fragment level
'use client'

import React                     from 'react'
import { FC }                    from 'react'

import { AllArticles }           from '@blog/articles-fragment'
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

import { IndexPageProps }        from './index-page.interfaces.js'
import { Seo }                   from './seo.component.js'

// @ts-expect-error not exist
export const IndexPageClient: FC<IndexPageProps> = ({ serverQueryData }) => {
  const { seoData, ogCover } = serverQueryData

  const { contacts } = getContactsData()
  // TODO ошибка тут
  // const { posts } = getBlogPostsData()
  const { navigation } = getNavigationData()
  const { availableRadii } = getAvailableRadiiData()
  const { fragments } = getFragmentsData()
  const { carBodies } = getCarBodiesData()
  const { services } = getServicesData()

  return <>bla</>

  //
  // return (
  //   <Column width='100%' alignItems='center'>
  //     <Seo ogCover={ogCover} SEO={seoData} />
  //     <Navigation
  //       navigationItemsType='blog-nav-item'
  //       backgroundColor='white'
  //       availableRadiiData={availableRadii}
  //       navigationData={navigation}
  //       fragmentsData={fragments}
  //       carBodiesData={carBodies}
  //       servicesData={services}
  //     />
  //     <AllArticles
  //       // @ts-expect-error undefined
  //       fragmentsData={fragments}
  //       postsData={posts}
  //     />
  //     <Footer
  //       fragmentsData={fragments}
  //       contactsData={contacts}
  //       navigationItemsType='blog-nav-item'
  //     />
  //   </Column>
  // )
}
