/* eslint-disable @typescript-eslint/promise-function-async */

import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import { useCarousel }            from '@ui/carousel'

export const WorkExamplesTabletCarousel: FC<PropsWithChildren> = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 2,
    spaceBetween: 20,
    centered: false,
    height: 333,
    width: 725,
    loop: false,
  })

  return carousel
}
