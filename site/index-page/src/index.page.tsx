import React             from 'react'
import { FC }            from 'react'

import { Column }        from '@ui/layout'
import { Navigation }    from '@site/navigation-fragment'
import { Footer }        from '@site/footer-fragment'
import { Main }          from '@site/main-fragment'
import { WorksExamples } from '@site/works-examples-fragment'
import { Services }      from '@site/services-fragment'
import { Articles }      from '@site/articles-fragment'

const IndexPage: FC = () => (
  <Column width='100%'>
    <Navigation location='header' />
    <Main />
    <Services />
    <Articles />
    <WorksExamples />
    <Footer />
  </Column>
)

export default IndexPage
