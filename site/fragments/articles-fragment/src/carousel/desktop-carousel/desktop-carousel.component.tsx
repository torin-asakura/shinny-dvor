/* eslint-disable @typescript-eslint/promise-function-async */

import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import { useCarousel }            from '@ui/carousel'

export const DesktopCarousel: FC<PropsWithChildren> = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 3,
    spaceBetween: 32,
    centered: false,
    height: 397,
    width: 1279,
    loop: false,
  })

  return carousel
}
