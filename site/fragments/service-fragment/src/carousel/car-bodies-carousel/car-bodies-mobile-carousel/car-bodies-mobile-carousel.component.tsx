/* eslint-disable @typescript-eslint/promise-function-async */

import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import { useCarousel }            from '@ui/carousel'

export const CarBodiesMobileCarousel: FC<PropsWithChildren> = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 3,
    spaceBetween: 16,
    centered: false,
    height: 40,
    width: 640,
    loop: false,
  })

  return carousel
}
