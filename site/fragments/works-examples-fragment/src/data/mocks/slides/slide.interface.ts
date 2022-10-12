export interface Slide {
  id: string
  alt: string
  image: {
    firstImage: string
    secondImage: string
  }
  price: string
  description: string
  timeOfExecution: number
}
