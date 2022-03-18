import React                    from 'react'
import { FC }                   from 'react'

import { Articles }             from '@fragments/articles-fragment'
import { Footer }               from '@fragments/footer-fragment'
import { NavigationDark }       from '@fragments/navigation-dark-fragment'
import { Hero }                 from '@site/hero-fragment'
import { Services }             from '@site/services-fragment'
import { ServicesInfographics } from '@site/services-infographics-fragment'
import { WorksExamples }        from '@site/works-examples-fragment'
import { Box }                  from '@ui/layout'
import { Column }               from '@ui/layout'

const IndexPage: FC = () => (
  <Column width='100%'>
    {/* TODO change background to image */}
    <Box width='100%' backgroundColor='black' justifyContent='center'>
      <Column width='100%' alignItems='center'>
        <NavigationDark />
        <Hero />
      </Column>
    </Box>
    <Services />
    <Articles />
    <ServicesInfographics />
    <WorksExamples />
    <Footer />
  </Column>
)

export default IndexPage
