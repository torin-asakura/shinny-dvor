import React                       from 'react'
import { FC }                      from 'react'
import { useRef }                  from 'react'
import { useEffect }               from 'react'
import { useState }                from 'react'

import { Articles }                from '@fragments/articles-fragment'
import { Footer }                  from '@fragments/footer-fragment'
import { Navigation }              from '@fragments/navigation-fragment'
import { Hero }                    from '@site/hero-fragment'
import { Services }                from '@site/services-fragment'
import { ServicesInfographics }    from '@site/services-infographics-fragment'
import { WorksExamples }           from '@site/works-examples-fragment'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { useIntersectionObserver } from '@ui/intersection-observer'

interface Props {
  data: any
}

const IndexPage: FC<Props> = ({
  data: { contacts, posts, navigation, availableRadii, services, fragments, ui, workResults },
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

  return (
    <Column width='100%' alignItems='center'>
      <Box width='100%' justifyContent='center'>
        <Column width='100%' alignItems='center'>
          <Navigation
            active={active}
            navigationData={navigation}
            availableRadiiData={availableRadii}
            fragmentsData={fragments}
          />
          <Hero
            fragmentsData={fragments}
            uiData={ui}
            contactsData={contacts}
            availableRadiiData={availableRadii}
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
