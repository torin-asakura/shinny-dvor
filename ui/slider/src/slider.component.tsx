import { Swiper }            from '@atls-ui-parts/swiper'

import React                 from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'
// @ts-ignore:next-line
import { Keyboard }          from 'swiper/modules'
// @ts-ignore:next-line
import { Navigation }        from 'swiper/modules'

import { SliderProps }       from './slider.interface.js'

export const Slider: FC<PropsWithChildren<SliderProps>> = ({ children }) => (
  <Swiper
    loop
    loopAddBlankSlides={false}
    allowTouchMove={false}
    centeredSlides
    keyboard={{
      enabled: true,
    }}
    autoplay={{
      stopOnLastSlide: false,
    }}
    modules={[Keyboard, Navigation]}
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
