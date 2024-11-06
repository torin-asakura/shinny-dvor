/* eslint-disable @typescript-eslint/naming-convention */
import type { FormattedPagesDataType } from '../../../interfaces/index.js'

import { RowsNotExistError }           from '../error/index.js'
import { DataNotExistError }           from '../error/index.js'
import { UnauthorizedError }           from '../error/index.js'
import { getRowsData }                 from './rows-data.getter.js'

export const formatPagesDataHelper = async (
  pageResponses: Array<Response>
): Promise<FormattedPagesDataType> => {
  const formattedPagesData_response = pageResponses.map(async (pageResponse) => {
    const pageData = await pageResponse.json()

    if (!pageData) throw new DataNotExistError()
    if (!pageData.rows.length) throw new RowsNotExistError()
    if (pageData.message === 'Unauthorized') throw new UnauthorizedError()

    const rowsData = getRowsData(pageData.rows as Array<any>)
    return rowsData
  })

  const formattedPagesData = (await Promise.all(formattedPagesData_response)).flat()

  return formattedPagesData
}
