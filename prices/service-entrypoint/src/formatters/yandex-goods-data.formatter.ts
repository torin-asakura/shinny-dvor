export const formatYandexGoodsData = (goodsData) => {
  const formattedGoodsData = goodsData
    .map((item) =>
      // @ts-expect-error any
      item.rows.map(({ id, group_id, name, price }) => ({
        id,
        group_id,
        name,
        price,
      })))
    .flat()
  return formattedGoodsData
}
