import { Swiper }      from '@atls-ui-parts/swiper'

import React           from 'react'
// @ts-ignore
import { Keyboard }    from 'swiper/modules'
// @ts-ignore
import { Navigation }  from 'swiper/modules'
import { memo }        from 'react'

import { SliderProps } from './slider.interfaces.js'

export const Slider = memo(({ onSwiper, children }: SliderProps) => (
  <Swiper
    // @ts-ignore
    onSwiper={onSwiper}
    loop
    centeredSlides
    loopAddBlankSlides={false}
    allowTouchMove={false}
    // @ts-ignore
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
        initialSlide: 2,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 0,
      },
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 40,
        initialSlide: 2,
      },
    }}
  >
    {children}
  </Swiper>
))
