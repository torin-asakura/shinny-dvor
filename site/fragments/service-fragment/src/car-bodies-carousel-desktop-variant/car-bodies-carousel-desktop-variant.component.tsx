import type { CarBodiesCarouselDesktopVariantProps } from './car-bodies-carousel-desktop-variant.interface.js'
import type { FC }                                   from 'react'

import React                                         from 'react'

import { Layout }                                    from '@ui/layout'
import { Switch }                                    from '@ui/switch'

export const CarBodiesCarouselDesktopVariant: FC<CarBodiesCarouselDesktopVariantProps> = ({
  onCarBody,
  carBodies,
  setOnCarBody,
}) => {
  return (
    <Layout display={['none', 'none', 'flex']}>
      <Switch active={onCarBody} items={carBodies} onSelect={setOnCarBody} />
    </Layout>
  )
}
