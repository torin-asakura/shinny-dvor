import React           from 'react'
import { FC }          from 'react'
import { Keyboard }    from 'swiper'
import { Swiper }      from 'swiper/react'

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
    loop
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
