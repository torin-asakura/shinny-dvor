export interface UseCarouselOptions {
  children: any
  height: number | string
  width?: number | string
  slidesPerView?: number
  spaceBetween?: number
  dragElastic?: 0.5
  transitionDuration?: number
  swipeThreshold?: number
  centered?: boolean
  loop?: boolean
}
