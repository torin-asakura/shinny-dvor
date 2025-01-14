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
    initialSlide={2}
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
  >
    {children}
  </Swiper>
))
