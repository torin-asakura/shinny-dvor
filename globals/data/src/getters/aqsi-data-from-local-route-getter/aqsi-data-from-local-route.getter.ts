import { getLocalOrigin } from './local-origin.getter.js'

export const getAqsiDataFromLocalRoute = async (): Promise<Array<any>> => {
  try {
    const baseUrl = getLocalOrigin()
    const API_ROUTE = '/api/aqsi-data'
    const fetchUrl = new URL(API_ROUTE, baseUrl)

    const response = await fetch(fetchUrl)
    const responseData = (await response.json()) as Array<any>

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    if (responseData.length) return responseData
    return []
  } catch (error) {
    return []
  }
}
