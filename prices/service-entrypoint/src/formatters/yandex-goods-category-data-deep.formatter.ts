export const formatYandexGoodsCategoryDataDeep = (goodsCategoryData) => {
  const formattedGoodsCategoryData = goodsCategoryData
    // @ts-expect-error any
    .filter((category) => category.children.length)
    // @ts-expect-error any
    .map((item) => item.children.map(({ id, name }) => ({ id, name })))
    .flat()

  return formattedGoodsCategoryData
}
