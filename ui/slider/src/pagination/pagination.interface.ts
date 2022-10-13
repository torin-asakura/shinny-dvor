import { Swiper } from 'swiper'

export interface PaginationProps {
  activeItem?: number
  totalItems: number
  desktopSwiper: Swiper | null
  tabletSwiper: Swiper | null
  mobileSwiper: Swiper | null
}
