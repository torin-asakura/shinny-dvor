type GoodsCategoryDataItem = {
  id: string
  name: string
  children: Array<{ id: string; name: string }>
}

export type GoodsCategoryDataType = Array<GoodsCategoryDataItem>
