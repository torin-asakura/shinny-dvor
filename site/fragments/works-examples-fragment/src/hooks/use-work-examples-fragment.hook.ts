import type { Swiper as SwiperCore }              from 'swiper'

import type { SlidesType }                        from '../works-examples.interface.js'
import type { UseWorkExamplesFragmentReturnType } from './use-work-examples-fragment.interface.js'
import type { UseWorkExamplesFragmentProps }      from './use-work-examples-fragment.interface.js'

import { useEffect }                              from 'react'
import { useState }                               from 'react'

import { extractFragment }                        from '@globals/data'
import { extractFragments }                       from '@globals/data'

export const useWorkExamplesFragment = ({
  fragmentsData,
  workResultsData,
}: UseWorkExamplesFragmentProps): UseWorkExamplesFragmentReturnType => {
  const [controlsSwiper, setControlsSwiper] = useState<SwiperCore | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const { title } = extractFragment('contentAddons', 'work-examples', fragmentsData) as {
    title: string
  }
  const subTitle = extractFragment('contentAddons', 'work-examples', fragmentsData)
    .content as string
  const priceTitle = extractFragment('contentAddons', 'price-title', fragmentsData).title as string
  const timeTitle = extractFragment('contentAddons', 'time-title', fragmentsData).title as string
  const slides = extractFragments(
    'work-result-item',
    'workResultParams',
    workResultsData
  ) as Array<SlidesType>

  useEffect(() => {
    const handleSlideChange = (): void => {
      if (controlsSwiper) {
        setActiveIndex(controlsSwiper.realIndex)
      }
    }

    if (controlsSwiper) {
      controlsSwiper.on('slideChange', handleSlideChange)
    }

    return (): void => {
      if (controlsSwiper) {
        controlsSwiper.off('slideChange', handleSlideChange)
      }
    }
  }, [controlsSwiper])

  useEffect(() => {
    if (controlsSwiper) {
      controlsSwiper.update()
    }
  }, [slides, controlsSwiper])

  return {
    controlsSwiper,
    setControlsSwiper,
    activeIndex,
    setActiveIndex,
    title,
    subTitle,
    priceTitle,
    timeTitle,
    slides,
  }
}
