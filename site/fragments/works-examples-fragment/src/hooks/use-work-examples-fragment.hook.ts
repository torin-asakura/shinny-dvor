import type { Swiper as SwiperCore } from 'swiper'

import { useState }                  from 'react'

import { extractFragment }           from '@globals/data'
import { extractFragments }          from '@globals/data'

export const useWorkExamplesFragment = ({ fragmentsData, workResultsData }) => {
  const [controlsSwiper, setControlsSwiper] = useState<SwiperCore | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const { title } = extractFragment('contentAddons', 'work-examples', fragmentsData)
  const subTitle = extractFragment('contentAddons', 'work-examples', fragmentsData).content
  const priceTitle = extractFragment('contentAddons', 'price-title', fragmentsData).title
  const timeTitle = extractFragment('contentAddons', 'time-title', fragmentsData).title
  const slides = extractFragments('work-result-item', 'workResultParams', workResultsData)

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
