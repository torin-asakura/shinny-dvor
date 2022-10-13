export interface SlideProps {
  description: string
  price: string
  time: number
  image: {
    firstImage: string
    secondImage: string
  }
  setActiveIndex: (activeIndex: number) => void
}
