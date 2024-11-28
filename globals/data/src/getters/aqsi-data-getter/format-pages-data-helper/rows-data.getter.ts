import type { FormattedPagesDataType } from '../../../interfaces/index.js'

export const getRowsData = (rows: Array<any>): FormattedPagesDataType => {
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
