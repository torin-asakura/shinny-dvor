/* eslint-disable react-hooks/rules-of-hooks */

import type { UseAddonNavigationResult }  from '@atls-ui-parts/carousel'

import type { UseCarouselOptions }        from '../carousel.interface.js'
import type { UseCarouselReturn }         from './use-carousel.interface.js'

import { Container }                      from '@atls-ui-parts/carousel'
import { Slide }                          from '@atls-ui-parts/carousel'
import { Wrapper }                        from '@atls-ui-parts/carousel'
import { useAddonNavigation }             from '@atls-ui-parts/carousel'
import { useCarousel as useCarouselBase } from '@atls-ui-parts/carousel'
import { Children }                       from 'react'
import { useRef }                         from 'react'
import React                              from 'react'

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
}: UseCarouselOptions): UseCarouselReturn => {
  const containerRef = useRef(null)
  const wrapperRef = useRef(null)

  const items = Children.map(children, (child) => <Slide>{child}</Slide>)

  if (!items) {
    return { carousel: children }
  }

  const { slides, activeSlide, slidesLength, slideToIndex, slideToTwoIndexes, wrapperOptions } =
    useCarouselBase({
      ref: containerRef,
      items,
      options: {
        direction: 'horizontal',
        slidesPerView,
        spaceBetween,
        dragElastic,
        transitionDuration,
        swipeThreshold,
        centered,
        loop,
      },
    })

  const useControls = (): UseAddonNavigationResult =>
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
