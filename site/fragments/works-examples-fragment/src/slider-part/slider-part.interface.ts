import type { Swiper }     from 'swiper'

import type { SlidesType } from '../works-examples.interface.js'

export interface SliderPartProps {
  slides: Array<SlidesType>
  setControlsSwiper: globals.SetState<Swiper | null>
  priceTitle: string
  timeTitle: string
  setActiveIndex: globals.SetState<number>
}
