export interface ItemProps {
  uri: string
  serviceName: string
  addon: string
  description: string
  variant: string
  price: any
  image: {
    sourceUrl: string
    altText: string
  }
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
