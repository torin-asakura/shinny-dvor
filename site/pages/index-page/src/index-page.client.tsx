'use client'

import type { FC }                   from 'react'

import type { IndexPageClientProps } from './index-page.interfaces.js'

import { useRef }                    from 'react'
import { useState }                  from 'react'
import React                         from 'react'

import { Footer }                    from '@fragments/footer-fragment'
import { Navigation }                from '@fragments/navigation-fragment'
import { Articles }                  from '@site/articles-fragment'
import { Hero }                      from '@site/hero-fragment'
import { Services }                  from '@site/services-fragment'
import { ServicesInfographics }      from '@site/services-infographics-fragment'
import { WorksExamples }             from '@site/works-examples-fragment'
import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'

import { useIndexPageClient }        from './hooks/index.js'

export const IndexPageClient: FC<IndexPageClientProps> = ({
  servicesDataToReplace,
  isYandexTurbo,
}) => {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const isLoaded = useRef<boolean>(false)

  const [active, setActive] = useState<number>(0)
  const [scrollY, setScrollY] = useState<number>(0)

  const {
    navigation,
    fragments,
    contacts,
    posts,
    availableRadii,
    services,
    ui,
    workResults,
    carBodies,
    getObserverOptions,
  } = useIndexPageClient({
    headerRef,
    isLoaded,
    servicesDataToReplace,
    setActive,
    setScrollY,
  })

  return (
    <Column ref={headerRef} width='100%' alignItems='center'>
      <Box width='100%' justifyContent='center'>
        <Column width='100%' alignItems='center'>
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
        isYandexTurbo={isYandexTurbo}
        {...getObserverOptions('works-examples')}
      />
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}
