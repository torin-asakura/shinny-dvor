export interface ServiceProps {
  uri: string
  radius: string
  isSizeChosen: boolean
  title: string
  description: string
  variant: string
  addon: string
  price: any
  workexamples: {
    firstexample: {
      image: {
        altText: string
        sourceUrl: string
      }
      title: string
    }
    secondexample: {
      image: {
        altText: string
        sourceUrl: string
      }
      title: string
    }
  }
  additionalservice: {
    title: string
    price: number
  }
}
