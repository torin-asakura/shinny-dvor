import type { FC }                                  from 'react'

import type { CarBodiesCarouselMobileVariantProps } from './car-bodies-carousel-mobile-variant.interface.js'

import React                                        from 'react'

import { Box }                                      from '@ui/layout'

import { CarBodiesCarousel }                        from '../carousel/index.js'
import { CarBodiesPart }                            from './car-bodies-part/car-bodies-part.component.js'

export const CarBodiesCarouselMobileVariant: FC<CarBodiesCarouselMobileVariantProps> = ({
  carBodies,
  onCarBody,
  setOnCarBody,
}) => (
  <Box
    height={48}
    alignItems='center'
    borderRadius='$default'
    backgroundColor='$fillGray'
    display={['flex', 'flex', 'none']}
  >
    <CarBodiesCarousel>
      <CarBodiesPart carBodies={carBodies} setOnCarBody={setOnCarBody} onCarBody={onCarBody} />
    </CarBodiesCarousel>
  </Box>
)
