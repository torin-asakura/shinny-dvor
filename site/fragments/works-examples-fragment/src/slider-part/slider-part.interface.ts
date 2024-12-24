import type { Swiper } from 'swiper'

export interface SliderPartProps {
  // TODO
  slides: any
  setControlsSwiper: React.Dispatch<React.SetStateAction<Swiper | null>>
  // TODO
  priceTitle: any
  // TODO
  timeTitle: any
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}
