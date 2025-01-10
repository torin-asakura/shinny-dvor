import type { GoodsCategoryDataType } from '../interfaces/index.js'

export const mapYandexGoodsCategoryData = (
  goodsCategoryData: GoodsCategoryDataType
): Array<{ id: string; name: string }> => {
  const mappedGoodsCategoryData = goodsCategoryData
    .filter((item) => !item.children.length)
    .map(({ id, name }) => ({ id, name }))
    .flat()

  return mappedGoodsCategoryData
}
