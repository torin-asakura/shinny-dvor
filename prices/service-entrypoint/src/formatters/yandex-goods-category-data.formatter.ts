export const formatYandexGoodsCategoryData = (goodsCategoryData) => {
  const formattedGoodsCategoryData = goodsCategoryData
    // @ts-expect-error any
    .filter((item) => !item.children.length)
    // @ts-expect-error any
    .map(({ id, name }) => ({ id, name }))
    .flat()

  return formattedGoodsCategoryData
}
