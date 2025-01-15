import type { Swiper }     from 'swiper'

import type { SlidesType } from '../works-examples.interface.js'

export interface SliderPartProps {
  slides: Array<SlidesType>
  setControlsSwiper: React.Dispatch<React.SetStateAction<Swiper | null>>
  priceTitle: string
  timeTitle: string
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  isYandexTurbo?: boolean
}
