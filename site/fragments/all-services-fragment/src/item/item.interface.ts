import type { PriceType } from '@globals/data'

export interface ItemProps {
  serviceName: string
  addon: string
  price: PriceType
  averagePrice: number
  image: {
    sourceUrl: string
    altText: string
  }
}
