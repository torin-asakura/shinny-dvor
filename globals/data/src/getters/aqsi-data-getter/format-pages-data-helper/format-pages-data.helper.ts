import type { FormattedPagesDataType } from '../../../interfaces/index.js'

import { JsonParseError }              from '../error/index.js'
import { getRowsData }                 from './rows-data.getter.js'

const checkResponseDataValidity = (responseData: any): boolean => {
  if (!responseData) return false
  if (!responseData.rows.length) return false
  if (responseData.message === 'Unauthorized') return false
  return true
}

export const formatPagesDataHelper = async (
  pageResponses: Array<Response>
): Promise<FormattedPagesDataType> => {
  const outputData = []
  const responsesData = []

  for await (const pageResponse of pageResponses) {
    const responseText = await pageResponse.text()
    if (responseText) {
      try {
        const pageData = JSON.parse(responseText)
        responsesData.push(pageData)
      } catch (error) {
        console.error('Error on globals_aqsi-data-getter, parse json')
      }
    }
  }

  for (const responseData of responsesData) {
    const isResponseDataValid = checkResponseDataValidity(responseData)
    if (isResponseDataValid) {
      const rowsData = getRowsData(responseData.rows as Array<any>)
      outputData.push(...rowsData)
    }
  }

  return outputData
}
