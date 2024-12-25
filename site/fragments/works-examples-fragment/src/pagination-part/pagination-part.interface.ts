import type { Swiper as SwiperCore } from 'swiper'

import type { SlidesType }           from '../works-examples.interface.js'

export interface PaginationPartProps {
  activeIndex: number
  controlsSwiper: SwiperCore | null
  slides: Array<SlidesType>
}
