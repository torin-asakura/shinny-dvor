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

export const IndexPageClient: FC<IndexPageClientProps> = ({ serverQueryData }) => {
  const { seoData, ogCover } = serverQueryData

  const { navigation } = getNavigationData()
  const { fragments } = getFragmentsData()
  const { contacts } = getContactsData()
  const { posts } = getBlogPostsData()
  const { availableRadii } = getAvailableRadiiData()
  const { services } = getServicesData()
  const { ui } = getUiData()
  const { workResults } = getWorkResultsData()
  const { carBodies } = getCarBodiesData()

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
            navigationData={navigation}
            availableRadiiData={availableRadii}
            fragmentsData={fragments}
            carBodiesData={carBodies}
            servicesData={services}
            scrollY={scrollY}
          />
          <Hero
            fragmentsData={fragments}
            uiData={ui}
            contactsData={contacts}
            availableRadiiData={availableRadii}
            carBodiesData={carBodies}
            servicesData={services}
            navigationData={navigation}
            {...getObserverOptions('hero')}
          />
        </Column>
      </Box>
      <Services
        servicesData={services}
        fragmentsData={fragments}
        availableRadiiData={availableRadii}
        {...getObserverOptions('services')}
      />
      <Articles
        postsData={posts}
        fragmentsData={fragments}
        navigationData={navigation}
        {...getObserverOptions('articles')}
      />
      <ServicesInfographics
        uiData={ui}
        fragmentsData={fragments}
        {...getObserverOptions('infographics')}
      />
      <WorksExamples
        workResultsData={workResults}
        fragmentsData={fragments}
        {...getObserverOptions('works-examples')}
      />
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}
