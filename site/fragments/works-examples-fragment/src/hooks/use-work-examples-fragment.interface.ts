import type { FragmentsDataType }    from '@globals/data'
import type { WorkResultsDataType }  from '@globals/data'
import type { Swiper as SwiperCore } from 'swiper'

import type { SlidesType }           from '../works-examples.interface.js'

export interface UseWorkExamplesFragmentProps {
  fragmentsData: FragmentsDataType
  workResultsData: WorkResultsDataType
}

export interface UseWorkExamplesFragmentReturnType {
  controlsSwiper: SwiperCore | null
  setControlsSwiper: globals.SetState<SwiperCore | null>
  activeIndex: number
  setActiveIndex: globals.SetState<number>
  title: string
  subTitle: string
  priceTitle: string
  timeTitle: string
  slides: Array<SlidesType>
}
