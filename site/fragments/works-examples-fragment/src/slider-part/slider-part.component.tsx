import type { SliderPartProps } from './slider-part.interface.js'
import type { FC }              from 'react'

import React                    from 'react'

import { Row }                  from '@ui/layout'
import { Slider }               from '@ui/slider'
import { SwiperSlide }          from '@ui/slider'
import { Slide }                from '@ui/slider'

export const SliderPart: FC<SliderPartProps> = ({
  slides,
  setControlsSwiper,
  priceTitle,
  timeTitle,
  setActiveIndex,
  isYandexTurbo,
}) => {
  return (
    <Row justifyContent='center' alignItems='center' width='$fill' maxWidth={1440}>
      <Slider onSwiper={setControlsSwiper}>
        {slides.map((
          { workResultParams: { fragmentId, photos, price, description, time } },
          index: number
        ) => (
          <SwiperSlide key={`${fragmentId}-${index}`}>
            <Slide
              key={`${fragmentId}-${index}`}
              description={description}
              price={price}
              time={time}
              image={photos}
              priceTitle={priceTitle}
              timeTitle={timeTitle}
              setActiveIndex={setActiveIndex}
              isYandexTurbo={isYandexTurbo}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </Row>
  )
}
