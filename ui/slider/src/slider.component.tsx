import { Swiper }            from '@atls-ui-parts/swiper'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'
import { Keyboard }          from 'swiper/modules'
import React                 from 'react'

import { SliderProps }       from './slider.interface.js'

export const Slider: FC<PropsWithChildren<SliderProps>> = ({ children }) => (
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
