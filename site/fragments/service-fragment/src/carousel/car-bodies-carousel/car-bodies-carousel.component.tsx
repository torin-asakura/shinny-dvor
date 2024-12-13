import type { FC }                 from 'react'
import type { PropsWithChildren }  from 'react'

import React                       from 'react'

import { Box }                     from '@ui/layout'
import { Layout }                  from '@ui/layout'

import { CarBodiesMobileCarousel } from './car-bodies-mobile-carousel/index.js'
import { CarBodiesTabletCarousel } from './car-bodies-tablet-carousel/index.js'

export const CarBodiesCarousel: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Layout display={['none', 'flex', 'none']}>
      <CarBodiesTabletCarousel>{children}</CarBodiesTabletCarousel>
    </Layout>
    <Box display={['flex', 'none', 'none']} overflow='hidden'>
      <CarBodiesMobileCarousel>{children}</CarBodiesMobileCarousel>
    </Box>
  </>
)
