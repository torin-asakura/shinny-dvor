import { Swiper }                 from '@atls-ui-parts/swiper'
// @ts-expect-error
import { Keyboard }               from 'swiper/modules'
// @ts-expect-error
import { Navigation }             from 'swiper/modules'
import { memo }                    from 'react'
import { PropsWithChildren } from 'react'
import React                      from 'react'

export const Slider = memo(({ children }: PropsWithChildren) => (
  <Swiper
    loop
    centeredSlides
    loopAddBlankSlides={false}
    allowTouchMove={false}
    modules={[Keyboard, Navigation]}
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
))
