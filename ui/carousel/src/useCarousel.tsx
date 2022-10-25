import { useAddonNavigation }             from '@atls-ui-parts/carousel'
import { useCarousel as useCarouselBase } from '@atls-ui-parts/carousel'

import React                              from 'react'
import { Children }                       from 'react'
import { useRef }                         from 'react'

import { UseCarouselOptions }             from './carousel.interface'
import { Container }                      from './container'
import { Slide }                          from './slide'
import { Wrapper }                        from './wrapper'

export const useCarousel = ({
  children,
  height,
  width = '100%',
  slidesPerView = 1,
  spaceBetween = 30,
  dragElastic = 0.5,
  transitionDuration = 0.5,
  swipeThreshold = 10000,
  centered = true,
  loop = true,
}: UseCarouselOptions) => {
  const containerRef = useRef(null)
  const wrapperRef = useRef(null)

  const items = Children.map(children, (child) => <Slide>{child}</Slide>)

  const { slides, activeSlide, slidesLength, slideToIndex, slideToTwoIndexes, wrapperOptions } =
    useCarouselBase(containerRef, items, {
      direction: 'horizontal',
      slidesPerView,
      spaceBetween,
      dragElastic,
      transitionDuration,
      swipeThreshold,
      centered,
      loop,
    })

  const useControls = () =>
    useAddonNavigation({
      slidesLength,
      activeSlide,
      slideTo: slideToIndex,
      slideToTwo: slideToTwoIndexes,
      slidesPerView,
      centered,
      loop,
    })

  return {
    carousel: (
      <Container ref={containerRef} style={{ height, width }}>
        <Wrapper ref={wrapperRef} direction='horizontal' {...wrapperOptions}>
          {slides}
        </Wrapper>
      </Container>
    ),
    useControls,
  }
}
