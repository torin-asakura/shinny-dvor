export const getServicePrice = (price, radius, carBody) => {
  const servicePrice = price[radius]?.[carBody]
  return servicePrice
}
