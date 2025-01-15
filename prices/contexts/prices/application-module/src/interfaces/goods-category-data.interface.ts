type GoodsCategoryDataItem = {
  id: string
  name: string
  children: Array<{ id: string; name: string; parent: string }>
}

export type GoodsCategoryDataType = Array<GoodsCategoryDataItem>
