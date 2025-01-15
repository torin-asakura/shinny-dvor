/* eslint-disable @typescript-eslint/promise-function-async */

import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import { useCarousel }            from '@ui/carousel'

export const TabletCarousel: FC<PropsWithChildren> = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 2.8,
    spaceBetween: 0,
    centered: true,
    height: 333,
    width: 900,
    loop: true,
  })

  return carousel
}
