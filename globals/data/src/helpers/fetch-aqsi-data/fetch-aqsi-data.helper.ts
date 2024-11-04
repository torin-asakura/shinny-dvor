import type { FetchAqsiDataHelperReturnType } from './fetch-aqsi-data.interfaces.js'

import { AQSI_DATA_FETCH_REVALIDATE_SECONDS } from './fetch-aqsi-data.constants.js'

const checkResponseData = (responseData: any): FetchAqsiDataHelperReturnType => {
  if (responseData.rows.length && responseData.pages) {
    return responseData as FetchAqsiDataHelperReturnType
  }
  return null
}

const fetchAqsiDataHelper = async (url: string): Promise<FetchAqsiDataHelperReturnType> => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-client-key': `Application ${process.env.API_KEY!}`,
      },
      // @ts-expect-error
      next: { revalidate: AQSI_DATA_FETCH_REVALIDATE_SECONDS },
    })

    const responseData = await response.json()
    const checkdDataResult = checkResponseData(responseData)

    return checkdDataResult
  } catch (error) {
    return null
  }
}

export { fetchAqsiDataHelper }
