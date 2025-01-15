import type { GoodsCategoryDataType } from '../interfaces/index.js'

export const mapYandexGoodsCategoryDataDeep = (
  goodsCategoryData: GoodsCategoryDataType
): Array<{ id: string; name: string }> => {
  const mappedGoodsCategoryData = goodsCategoryData
    .filter((category) => category.children.length)
    .map((item) => item.children.map(({ id, name }) => ({ id, name })))
    .flat()

  return mappedGoodsCategoryData
}
