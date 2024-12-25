import type { CarBodiesCarouselMobileVariantProps } from './car-bodies-carousel-mobile-variant.interface.js'
import type { FC }                                  from 'react'

import React                                        from 'react'

import { Box }                                      from '@ui/layout'

import { CarBodiesCarousel }                        from '../carousel/index.js'
import { CarBodyItem }                              from './car-body-item/index.js'

export const CarBodiesCarouselMobileVariant: FC<CarBodiesCarouselMobileVariantProps> = ({
  carBodies,
  onCarBody,
  setOnCarBody,
}) => {
  return (
    <Box
      height={48}
      alignItems='center'
      borderRadius='$default'
      backgroundColor='$fillGray'
      display={['flex', 'flex', 'none']}
    >
      <CarBodiesCarousel>
        {carBodies &&
          carBodies.map(
            (item: string | null) =>
              item && <CarBodyItem item={item} onCarBody={onCarBody} setOnCarBody={setOnCarBody} />
          )}
      </CarBodiesCarousel>
    </Box>
  )
}
