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
}) => (
  <Box
    height={48}
    alignItems='center'
    borderRadius='$default'
    backgroundColor='$fillGray'
    display={['flex', 'flex', 'none']}
  >
    <CarBodiesCarousel>
      {
        // eslint-disable-next-line react/jsx-no-leaked-render
        carBodies &&
          carBodies.map(
            (item: string | null, index) =>
              item && (
                <CarBodyItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={`car-bodies-carousel-${index}`}
                  item={item}
                  setOnCarBody={setOnCarBody}
                  onCarBody={onCarBody}
                />
              )
          )
      }
    </CarBodiesCarousel>
  </Box>
)
