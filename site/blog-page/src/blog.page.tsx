import React        from 'react'
import { FC }       from 'react'

import { Column }   from '@ui/layout'
import { Header }   from '@site/header-fragment'
import { Footer }   from '@site/footer-fragment'
import { Articles } from '@site/articles-fragment'

const IndexPage: FC = () => (
  <Column width='100%'>
    <Header />
    <Articles />
    <Footer />
  </Column>
)

export default IndexPage
