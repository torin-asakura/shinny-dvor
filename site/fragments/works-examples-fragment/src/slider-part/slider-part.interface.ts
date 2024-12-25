import type { SlidesType } from '../works-examples.interface.js'
import type { Swiper }     from 'swiper'

export interface SliderPartProps {
  slides: Array<SlidesType>
  setControlsSwiper: globals.SetState<Swiper | null>
  priceTitle: string
  timeTitle: string
  setActiveIndex: globals.SetState<number>
}
