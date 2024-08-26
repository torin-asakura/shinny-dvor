import type { PriceType } from '@globals/data'

export interface ItemProps {
  uri: string
  serviceName: string
  addon: string
  price: PriceType
  averagePrice: number
  image: {
    sourceUrl: string
    altText: string
  }
}
