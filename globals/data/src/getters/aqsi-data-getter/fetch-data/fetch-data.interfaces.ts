type ItemRowType = { id: string; group_id: string; name: string; price: number }

export type FetchAqsiDataHelperReturnType = {
  rows: Array<ItemRowType>
  message?: string
  pages: number
} | null
