import type { FC }                                   from 'react'

import type { CarBodiesCarouselDesktopVariantProps } from './car-bodies-carousel-desktop-variant.interface.js'

import React                                         from 'react'

import { Layout }                                    from '@ui/layout'
import { Switch }                                    from '@ui/switch'

export const CarBodiesCarouselDesktopVariant: FC<CarBodiesCarouselDesktopVariantProps> = ({
  onCarBody,
  carBodies,
  setOnCarBody,
}) => (
  <Layout display={['none', 'none', 'flex']}>
    <Switch active={onCarBody} items={carBodies} onSelect={setOnCarBody} />
  </Layout>
)
