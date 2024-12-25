import { PropsWithChildren } from 'react'
// @ts-ignore
import { Swiper }            from 'swiper'

export interface SliderProps extends PropsWithChildren {
  onSwiper?: (swiper: Swiper) => void
}
