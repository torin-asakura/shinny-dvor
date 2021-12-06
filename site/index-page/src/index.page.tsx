import React                    from 'react'
import { FC }                   from 'react'

import { Column }               from '@ui/layout'
import { Navigation }           from '@site/navigation-fragment'
import { Footer }               from '@site/footer-fragment'
import { Hero }                 from '@site/hero-fragment'
import { WorksExamples }        from '@site/works-examples-fragment'
import { Services }             from '@site/services-fragment'
import { Articles }             from '@site/articles-fragment'
import { ServicesInfographics } from '@site/services-infographics-fragment'

const IndexPage: FC = () => (
  <Column width='100%'>
    <Navigation location='header' />
    <Hero />
    <Services />
    <Articles />
    <ServicesInfographics />
    <WorksExamples />
    <Footer />
  </Column>
)

export default IndexPage
