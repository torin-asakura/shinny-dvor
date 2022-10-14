export interface ServiceProps {
  radius: string
  isSizeChosen: boolean
  title: string
  description: string
  variant: string
  addon: string
  price: {
    r12: number
    r13: number
    r14: number
    r15: number
    r16: number
    r17: number
    r18: number
    r19: number
    r20: number
    r21: number
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
