import type { SlidesType }           from '../works-examples.interface.js'
import type { Swiper as SwiperCore } from 'swiper'

export interface PaginationPartProps {
  activeIndex: number
  controlsSwiper: SwiperCore | null
  slides: Array<SlidesType>
}
