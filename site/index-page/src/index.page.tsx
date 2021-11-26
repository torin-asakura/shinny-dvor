import React             from 'react'
import { FC }            from 'react'

import { Header }        from '@site/header-fragment'
import { Footer }        from '@site/footer-fragment'
import { WorksExamples } from '@site/works-examples-fragment'

const IndexPage: FC = () => (
  <div width='100%'>
    <Header />
    <WorksExamples />
    <Footer />
  </div>
)

export default IndexPage
