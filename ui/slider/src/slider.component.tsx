import type { SliderProps } from './slider.interfaces.js'

import { Swiper }           from '@atls-ui-parts/swiper'
import { Keyboard }         from 'swiper/modules'
import { Navigation }       from 'swiper/modules'
import { memo }             from 'react'
import React                from 'react'

export const Slider = memo(({ onSwiper, children }: SliderProps) => (
  <Swiper
    loop
    centeredSlides
    initialSlide={2}
    loopAddBlankSlides={false}
    allowTouchMove={false}
    // @ts-expect-error incompletable types
    modules={[Keyboard, Navigation]}
    style={{}}
    keyboard={{
      enabled: true,
    }}
    autoplay={{
      stopOnLastSlide: false,
    }}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 40,
      },
    }}
    // @ts-expect-error incompletable types
    onSwiper={onSwiper}
  >
    {children}
  </Swiper>
))
