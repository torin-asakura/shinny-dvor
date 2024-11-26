export const format2gisGoodsCategoryData = (goodsCategoryData) => {
  const formattedGoodsCategoryData = goodsCategoryData
    // @ts-expect-error any
    .map((item) => {
      const { id, name } = item

      if (name.includes('Балансировка')) {
        console.log('category data:')
        console.log(item)
      }

      return { id, name }
    })
    .flat()

  return formattedGoodsCategoryData
}
