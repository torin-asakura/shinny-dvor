import type { FormattedPagesDataType } from '../../../interfaces/index.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRowsData = (rows: Array<any>): FormattedPagesDataType => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rowsData = rows.map((rowData: any) => {
    if (rowData.name && rowData.price) {
      const { name, price } = rowData
      return {
        name,
        price,
      }
    }

    return {
      name: null,
      price: null,
    }
  })

  return rowsData
}
