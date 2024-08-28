import type { PriceType } from '@globals/data'

export interface ServiceProps {
  uri: string
  title: string
  description: string
  price: PriceType
}
