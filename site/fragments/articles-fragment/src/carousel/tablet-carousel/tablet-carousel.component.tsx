import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import React                      from 'react'

import { useCarousel }            from '@ui/carousel'

export const TabletCarousel: FC<PropsWithChildren> = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 3,
    spaceBetween: 0,
    centered: true,
    height: 333,
    width: 900,
    loop: true,
  })

  return carousel
}
