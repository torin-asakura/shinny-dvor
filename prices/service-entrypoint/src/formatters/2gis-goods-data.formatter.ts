export const format2gisGoodsData = (goodsData) => {
  const formattedGoodsData = goodsData
    .map((item) => {
      // @ts-expect-error any
      return item.rows.map((row) => {
        const { id, group_id, name, price } = row

        if (name.includes('Балансировка')) {
          console.log('row data:')
          // console.log(name, id, group_id)
          // console.log(row)
        }

        // const findedRow = formattedGoodsCategoryData_2gis.find(({ id }) => id === group_id)
        // if (findedRow) {
        //   // console.log(findedRow.name, name)
        // }

        return {
          id,
          group_id,
          name,
          price,
        }
      })
    })
    .flat()

  return formattedGoodsData
}
