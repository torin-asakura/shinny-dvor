import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import React                      from 'react'

import { useCarousel }            from '@ui/carousel'

export const MobileCarousel: FC<PropsWithChildren> = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 2,
    spaceBetween: 0,
    centered: false,
    height: 333,
    width: 700,
    loop: true,
  })

  return carousel
}
