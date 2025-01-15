import type { PriceType } from '../service.interface.js'

export const getDefaultPrice = (price: PriceType): number => {
  if (price) {
    const priceKey = Object.keys(price)[1] as keyof typeof price
    // @ts-expect-error property not exist
    const defaultPrice = price[priceKey]?.passenger as unknown as number
    return defaultPrice
  }

  return 0
}
