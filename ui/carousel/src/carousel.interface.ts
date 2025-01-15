import type { PropsWithChildren } from 'react'

export interface UseCarouselOptions extends PropsWithChildren {
  height: number | string
  width?: number | string
  slidesPerView?: number
  spaceBetween?: number
  dragElastic?: number
  transitionDuration?: number
  swipeThreshold?: number
  centered?: boolean
  loop?: boolean
}
