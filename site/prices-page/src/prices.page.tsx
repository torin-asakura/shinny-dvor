import React          from 'react'
import { FC }         from 'react'

import { Column }     from '@ui/layout'
import { Navigation } from '@site/navigation-fragment'
import { Footer }     from '@site/footer-fragment'

import { Prices }     from './prices'

const PricesPage: FC = () => (
  <Column width='100%'>
    <Navigation location='header' />
    <Prices />
    <Footer />
  </Column>
)

export default PricesPage
