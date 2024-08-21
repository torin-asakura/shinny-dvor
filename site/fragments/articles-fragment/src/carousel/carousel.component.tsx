import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import React                      from 'react'

import { Layout }                 from '@ui/layout'

import { DesktopCarousel }        from './desktop-carousel/index.js'
import { MobileCarousel }         from './mobile-carousel/index.js'
import { TabletCarousel }         from './tablet-carousel/index.js'

export const Carousel: FC<PropsWithChildren> = ({ children }) => (
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
