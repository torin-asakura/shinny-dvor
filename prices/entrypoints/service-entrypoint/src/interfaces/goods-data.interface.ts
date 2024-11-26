export type RowType = {
  id: string
  group_id: string
  name: string
  price: string
}

export type GoodsDataType = {
  pages: number
  rows: Array<RowType>
}
