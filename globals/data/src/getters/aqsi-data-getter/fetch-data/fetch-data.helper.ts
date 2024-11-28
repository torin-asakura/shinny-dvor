/* eslint-disable */
import type { FetchAqsiDataHelperReturnType } from './fetch-data.interfaces.js'

import { AQSI_DATA_FETCH_REVALIDATE_SECONDS } from './fetch-data.constants.js'

const fetchAqsiDataHelper = async (url: string): Promise<Response> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-client-key': `Application ${process.env.API_KEY!}`,
    },
    // @ts-ignore
    next: { revalidate: AQSI_DATA_FETCH_REVALIDATE_SECONDS },
  })

  return response
}

export { fetchAqsiDataHelper }
