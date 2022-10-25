export interface SlideProps {
  description: string
  price: number
  time: string
  priceTitle: string
  timeTitle: string
  image: {
    firstPhoto: {
      sourceUrl: string
    }
    secondPhoto: {
      sourceUrl: string
    }
  }
  setActiveIndex: (activeIndex: number) => void
}
