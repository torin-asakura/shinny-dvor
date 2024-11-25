export const get2gisCategories = (goodsCategoryData) => {
  // @ts-expect-error any
  // return goodsCategoryData.map(({ id, name }) => ({
  //   _attributes: {
  //     id,
  //   },
  //   _text: name,
  // }))
}
