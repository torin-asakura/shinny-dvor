import type { PriceType } from '../service.interface.js'

interface Props {
  price: PriceType
  carBody: string
}

type ReturnValue = Array<string>

export const getAvailableRadii = ({ price, carBody }: Props): ReturnValue => {
  if (price) {
    const availableRadii = Object.entries(price)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((item: any) => item[1]?.[carBody] !== null)
      .map((item) => item[0])
      .filter((item) => item.length < 4)
    return availableRadii
  }
  return ['']
}
