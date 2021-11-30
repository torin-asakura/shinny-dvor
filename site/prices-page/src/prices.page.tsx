import React      from 'react'
import { FC }     from 'react'

import { Column } from '@ui/layout'
import { Header } from '@site/header-fragment'
import { Footer } from '@site/footer-fragment'

import { Prices } from './prices'

const PricesPage: FC = () => (
  <Column width='100%'>
    <Header />
    <Prices />
    <Footer />
  </Column>
)

export default PricesPage
