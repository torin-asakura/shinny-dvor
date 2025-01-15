import type { SlideProps }         from './slide.interface.js'

import { useSwiperSlide }          from '@atls-ui-parts/swiper'
import { useSwiper }               from '@atls-ui-parts/swiper'
import { memo }                    from 'react'
import { useEffect }               from 'react'
import React                       from 'react'

import { Condition }               from '@ui/condition'
import { Layout }                  from '@ui/layout'
import { Column }                  from '@ui/layout'

import { Container }               from './container/index.js'
import { SlideDescription }        from './slide-description/index.js'
import { SlideDescriptionDesktop } from './slide-description/index.js'
import { SlideImage }              from './slide-image/index.js'
import { Wrapper }                 from './wrapper/index.js'

const Slide = memo(({
  description,
  setActiveIndex,
  price,
  time,
  image,
  priceTitle,
  timeTitle,
  isYandexTurbo,
}: SlideProps) => {
  const swiperSlide = useSwiperSlide()
  const swiper = useSwiper()

  useEffect(() => {
    setActiveIndex(swiper.realIndex)
  }, [swiper.realIndex, setActiveIndex])

  return (
    <Wrapper active={swiperSlide.isActive}>
      <Column fill>
        <Container>
          <SlideImage swiperSlide={swiperSlide} image={image} isYandexTurbo={isYandexTurbo} />
        </Container>
        <Layout flexBasis={20} flexShrink={0} />
        <Condition match={swiperSlide.isActive}>
          <SlideDescriptionDesktop
            description={description}
            priceTitle={priceTitle}
            price={price}
            timeTitle={timeTitle}
            time={time}
          />
        </Condition>
        <SlideDescription
          description={description}
          priceTitle={priceTitle}
          price={price}
          timeTitle={timeTitle}
          time={time}
        />
        <Layout flexBasis={40} />
      </Column>
    </Wrapper>
  )
})

export { Slide }
