import { Swiper }      from '@atls-ui-parts/swiper'

import React           from 'react'
import { FC }          from 'react'
import { Keyboard }    from 'swiper'

import { SliderProps } from './slider.interface.js'

const Slider: FC<SliderProps> = ({ children }) => (
  <Swiper
    loop
    allowTouchMove={false}
    centeredSlides
    keyboard={{
      enabled: true,
    }}
    modules={[Keyboard]}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 2,
      },
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 40,
        initialSlide: 0,
      },
    }}
  >
    {children}
  </Swiper>
)

export { Slider }
