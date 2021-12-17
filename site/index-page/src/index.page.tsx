import React                    from 'react'
import { FC }                   from 'react'

import { Box }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { NavigationDark }       from '@fragments/navigation-dark-fragment'
import { Footer }               from '@fragments/footer-fragment'
import { Hero }                 from '@site/hero-fragment'
import { WorksExamples }        from '@site/works-examples-fragment'
import { Services }             from '@site/services-fragment'
import { Articles }             from '@fragments/articles-fragment'
import { ServicesInfographics } from '@site/services-infographics-fragment'

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
