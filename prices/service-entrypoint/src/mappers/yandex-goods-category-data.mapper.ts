import type { GoodsCategoryDataType } from '../interfaces/index.js'

export const mapYandexGoodsCategoryData = (goodsCategoryData: GoodsCategoryDataType) => {
  const mappedGoodsCategoryData = goodsCategoryData
    .filter((item) => !item.children.length)
    .map(({ id, name }) => ({ id, name }))
    .flat()

  return mappedGoodsCategoryData
}
