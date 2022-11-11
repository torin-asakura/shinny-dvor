import React                       from 'react'
import { FC }                      from 'react'
import { useRef }                  from 'react'
import { useEffect }               from 'react'
import { useState }                from 'react'

import { Articles }                from '@site/articles-fragment'
import { Footer }                  from '@site/footer-fragment'
import { Hero }                    from '@site/hero-fragment'
import { Navigation }              from '@site/navigation-fragment'
import { Services }                from '@site/services-fragment'
import { ServicesInfographics }    from '@site/services-infographics-fragment'
import { WorksExamples }           from '@site/works-examples-fragment'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { useIntersectionObserver } from '@ui/intersection-observer'

import { Seo }                     from './seo.component'

interface Props {
  ogCover: string
  SEO: any
  data: any
}

const IndexPage: FC<Props> = ({
  SEO,
  ogCover,
  data: {
    contacts,
    posts,
    navigation,
    availableRadii,
    services,
    fragments,
    ui,
    workResults,
    carBodies,
  },
}) => {
  const [active, setActive] = useState<number>(0)

  const isLoaded = useRef<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      isLoaded.current = true
    }, 200)
  }, [])

  const { getObserverOptions } = useIntersectionObserver((id) => {
    const order = ['hero', 'services', 'articles', 'infographics', 'works-examples']

    if (isLoaded.current) {
      setActive(order.indexOf(id))
    }
  })

  const headerRef = useRef<HTMLDivElement | null>(null)

  const [scrollY, setScrollY] = useState<number>(0)

  const scrollHandler = () => {
    const y = headerRef!.current!.getBoundingClientRect()

    setScrollY(y.y)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, false)

    return () => window.removeEventListener('scroll', scrollHandler, false)
  }, [])

  return (
    <Column width='100%' alignItems='center' ref={headerRef}>
      <Box width='100%' justifyContent='center'>
        <Column width='100%' alignItems='center'>
          <Seo ogCover={ogCover} SEO={SEO} />
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

export default IndexPage
