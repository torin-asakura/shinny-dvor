import type { SlidesType }           from '../works-examples.interface.js'
import type { FragmentsDataType }    from '@globals/data'
import type { WorkResultsDataType }  from '@globals/data'
import type { Swiper as SwiperCore } from 'swiper'

export interface UseWorkExamplesFragmentProps {
  fragmentsData: FragmentsDataType
  workResultsData: WorkResultsDataType
}

export interface UseWorkExamplesFragmentReturnType {
  controlsSwiper: SwiperCore | null
  setControlsSwiper: React.Dispatch<React.SetStateAction<SwiperCore | null>>
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  title: string
  subTitle: string
  priceTitle: string
  timeTitle: string
  slides: Array<SlidesType>
}
