interface SlideData {
  isActive: boolean
  isVisible: boolean
  isPrev: boolean
  isNext: boolean
}

interface Swiper {
  firstPhoto: {
    sourceUrl: string
  }
  secondPhoto: {
    sourceUrl: string
  }
}

export interface SlideImageProps {
  swiperSlide: SlideData
  image: Swiper
  isYandexTurbo?: boolean
}

export interface ReactCompareImageProps {
  aspectRatio?: 'taller' | 'wider'
  handle?: React.ReactNode
  handleSize?: number
  hover?: boolean
  leftImage: string
  leftImageAlt?: string
  leftImageCss?: object
  leftImageLabel?: string
  onSliderPositionChange?: (position: number) => void
  rightImage: string
  rightImageAlt?: string
  rightImageCss?: object
  rightImageLabel?: string
  skeleton?: React.ReactNode
  sliderLineColor?: string
  sliderLineWidth?: number
  sliderPositionPercentage?: number
  vertical?: boolean
}
