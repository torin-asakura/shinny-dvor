import React          from 'react'
import { FC }         from 'react'
import { Pagination } from 'swiper'
import { Swiper }     from 'swiper/react'

const Slider: FC = ({ children }) => (
  <Swiper
    slidesPerView={3}
    spaceBetween={700}
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
