import {SwiperProps} from "@atls-ui-parts/swiper";

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
    swiperSlide: SlideData,
    image: Swiper
}