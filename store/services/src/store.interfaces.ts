export type CarBody = string
export type Service = {
  radius: string
  serviceName: string
  price: number
  addon: string
  description: string
  variant: string
  workexamples: {
    firstexample: {
      image: {
        sourceUrl: string
        altText: string
      }
      title: string
      price?: number
    }
    secondexample: {
      image: {
        sourceUrl: string
        altText: string
      }
      title: string
      price?: number
    }
  }
  additionalservice: {
    title: string
    price: number
  }
}
