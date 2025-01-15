import type { Swiper } from 'swiper'

export interface PaginationProps {
  activeItem?: number
  totalItems: number
  swiper: Swiper | null
}
