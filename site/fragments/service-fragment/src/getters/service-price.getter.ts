export const getServicePrice = (price: object, radius: string, carBody: string): string => {
  if (price) {
    const servicePrice = price[radius as keyof typeof price]?.[carBody]
    return servicePrice
  }

  return ''
}
