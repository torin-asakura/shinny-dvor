import React                       from 'react'
import { FC }                      from 'react'
import { useState }                from 'react'

import { Articles }                from '@fragments/articles-fragment'
import { Footer }                  from '@fragments/footer-fragment'
import { NavigationDark }          from '@fragments/navigation-dark-fragment'
import { Hero }                    from '@site/hero-fragment'
import { Services }                from '@site/services-fragment'
import { ServicesInfographics }    from '@site/services-infographics-fragment'
import { WorksExamples }           from '@site/works-examples-fragment'
import { useIntersectionObserver } from '@ui/intersection-observer'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'

const IndexPage: FC = () => {
  const [active, setActive] = useState<number>(0)

  const { getObserverOptions } = useIntersectionObserver((id) => {
    const order = ['hero', 'services', 'articles', 'infographics', 'works-examples']

    setActive(order.indexOf(id))
  })

  return (
    <Column width='100%'>
      {/* TODO change background to image */}
      <Box width='100%' backgroundColor='black' justifyContent='center'>
        <Column width='100%' alignItems='center'>
          <NavigationDark active={active} />
          <Hero {...getObserverOptions('hero', 0.7)} />
        </Column>
      </Box>
      <Services {...getObserverOptions('services', 1)} />
      <Articles {...getObserverOptions('articles', 1)} />
      <ServicesInfographics {...getObserverOptions('infographics', 1)} />
      <WorksExamples {...getObserverOptions('works-examples', 1)} />
      <Footer />
    </Column>
  )
}

export default IndexPage
