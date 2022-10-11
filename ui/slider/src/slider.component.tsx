import React          from 'react'
import { FC }         from 'react'
import { Pagination } from 'swiper'
import { Swiper }     from 'swiper/react'

const Slider: FC = ({ children }) => (
  <Swiper
    slidesPerView={1.5}
    initialSlide={2}
    spaceBetween={40}
    loop
    centeredSlides
    pagination={{
      clickable: true,
    }}
    touchEventsTarget='container'
    modules={[Pagination]}
  >
    {children}
  </Swiper>
)

export { Slider }
