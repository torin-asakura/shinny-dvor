import type { PropsWithChildren } from 'react'
import type { Swiper }            from 'swiper'

export interface SliderProps extends PropsWithChildren {
  onSwiper?: (swiper: Swiper) => void
}
