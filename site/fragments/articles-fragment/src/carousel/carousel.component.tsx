import React           from 'react'
import { FC }          from 'react'

import { Layout }      from '@ui/layout'
import { useCarousel } from '@ui/carousel'

import { Layout }                 from '@ui/layout'

import { DesktopCarousel }        from './desktop-carousel/index.js'
import { MobileCarousel }         from './mobile-carousel/index.js'
import { TabletCarousel }         from './tablet-carousel/index.js'

const Carousel: FC = ({ children }) => (
  <>
    <Layout overflow='hidden' display={['none', 'none', 'flex']}>
      <DesktopCarousel>{children}</DesktopCarousel>
    </Layout>
    <Layout display={['none', 'flex', 'none']}>
      <TabletCarousel>{children}</TabletCarousel>
    </Layout>
    <Layout display={['flex', 'none', 'none']}>
      <MobileCarousel>{children}</MobileCarousel>
    </Layout>
  </>
)

export { Carousel }
