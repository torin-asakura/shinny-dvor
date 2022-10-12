import React           from 'react'
import { FC }          from 'react'
import { Pagination }  from 'swiper'
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
    centeredSlides
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
  >
    {children}
  </Swiper>
)

export { Slider }
