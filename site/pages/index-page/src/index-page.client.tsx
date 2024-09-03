'use client'

import type { IndexPageClientProps } from './index-page.interfaces.js'
import type { FC }                   from 'react'

import React                         from 'react'
import { useRef }                    from 'react'
import { useState }                  from 'react'

import { Footer }                    from '@fragments/footer-fragment'
import { Navigation }                from '@fragments/navigation-fragment'
import { Articles }                  from '@site/articles-fragment'
import { Hero }                      from '@site/hero-fragment'
import { Services }                  from '@site/services-fragment'
import { ServicesInfographics }      from '@site/services-infographics-fragment'
import { WorksExamples }             from '@site/works-examples-fragment'
import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { getNavigationData }         from '@globals/data'
import { getBlogPostsData }          from '@globals/data'
import { getAvailableRadiiData }     from '@globals/data'
import { getContactsData }           from '@globals/data'
import { getServicesData }           from '@globals/data'
import { getFragmentsData }          from '@globals/data'
import { getUiData }                 from '@globals/data'
import { getWorkResultsData }        from '@globals/data'
import { getCarBodiesData }          from '@globals/data'

import { Seo }                       from './seo.component.js'
import { useIndexPageClient }        from './hooks/use-index-page-client.hook.js'

export const IndexPageClient: FC<IndexPageClientProps> = ({ seoData, ogCover }) => {
  const { navigation: navigationData } = getNavigationData()
  const { fragments: fragmentsData } = getFragmentsData()
  const { contacts: contactsData } = getContactsData()
  const { posts: blogPostsData } = getBlogPostsData()
  const { availableRadii: availableRadiiData } = getAvailableRadiiData()
  const { services: servicesData } = getServicesData()
  const { ui: uiData } = getUiData()
  const { workResults: workResultsData } = getWorkResultsData()
  const { carBodies: carBodiesData } = getCarBodiesData()

  console.log(contactsData)
  console.log(blogPostsData)
  console.log(availableRadiiData)
  console.log(servicesData)
  console.log(uiData)
  console.log(workResultsData)
  console.log(carBodiesData)

  const headerRef = useRef<HTMLDivElement | null>(null)
  const isLoaded = useRef<boolean>(false)

  const [active, setActive] = useState<number>(0)
  const [scrollY, setScrollY] = useState<number>(0)

  const { getObserverOptions } = useIndexPageClient({ isLoaded, setActive, headerRef, setScrollY })

  return (
    <Column ref={headerRef} width='100%' alignItems='center'>
      <Box width='100%' justifyContent='center'>
        <Column width='100%' alignItems='center'>
          <Seo ogCover={ogCover} SEO={seoData} />
          <Navigation
            active={active}
            navigationData={navigationData}
            availableRadiiData={availableRadiiData}
            fragmentsData={fragmentsData}
            carBodiesData={carBodiesData}
            servicesData={servicesData}
            scrollY={scrollY}
          />
          <Hero
            fragmentsData={fragmentsData}
            uiData={uiData}
            contactsData={contactsData}
            availableRadiiData={availableRadiiData}
            carBodiesData={carBodiesData}
            servicesData={servicesData}
            navigationData={navigationData}
            {...getObserverOptions('hero')}
          />
        </Column>
      </Box>
      <Services
        servicesData={servicesData}
        fragmentsData={fragmentsData}
        availableRadiiData={availableRadiiData}
        {...getObserverOptions('services')}
      />
      <Articles
        postsData={blogPostsData}
        fragmentsData={fragmentsData}
        navigationData={navigationData}
        {...getObserverOptions('articles')}
      />
      <ServicesInfographics
        uiData={uiData}
        fragmentsData={fragmentsData}
        {...getObserverOptions('infographics')}
      />
      <WorksExamples
        workResultsData={workResultsData}
        fragmentsData={fragmentsData}
        {...getObserverOptions('works-examples')}
      />
      <Footer fragmentsData={fragmentsData} contactsData={contactsData} />
    </Column>
  )
}
