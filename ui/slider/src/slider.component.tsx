import { Swiper }      from '@atls-ui-parts/swiper'

import React           from 'react'
import { FC }          from 'react'
import { Keyboard }    from 'swiper'

import { SliderProps } from './slider.interface'

const Slider: FC<SliderProps> = ({
  children,
  slidesPerView,
  initialSlide,
  spaceBetween,
  width,
  height,
}) => (
  <Swiper
    slidesPerView={slidesPerView}
    initialSlide={initialSlide}
    spaceBetween={spaceBetween}
    width={width}
    height={height}
    allowTouchMove={false}
    centeredSlides
    keyboard={{
      enabled: true,
    }}
    modules={[Keyboard]}
  >
    {children}
  </Swiper>
)

export { Slider }
