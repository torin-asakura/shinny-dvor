import type { GetAqsiDataReturnType } from './aqsi-raw-data.interfaces.js'

import { GOODS_LIST_PATH }            from './aqsi-raw-data.constants.js'
import { AQSI_API_URL }               from './aqsi-raw-data.constants.js'
import { fetchAqsiDataHelper }        from '../../helpers/index.js'

export const getAqsiRawData = async (): Promise<GetAqsiDataReturnType> => {
  const requestUrl = `${AQSI_API_URL}${GOODS_LIST_PATH}`

  try {
    const jsonGoodsData = await fetchAqsiDataHelper(requestUrl)

    if (jsonGoodsData === null) throw new Error('response is nullish')

    const queryPromises = [...Array(jsonGoodsData.pages)].map(async (_, index) =>
      fetchAqsiDataHelper(`${AQSI_API_URL}${GOODS_LIST_PATH}?pageNumber=${index}`))

    const retrievedData = await Promise.all(queryPromises)

    const formattedGoodsData = retrievedData
      .map((item) => {
        if (item) {
          if (item.message === 'Unauthorized') throw new Error('Unauthorized')
          return item.rows.map(({ id, group_id, name, price }) => ({
            id,
            group_id,
            name,
            price,
          }))
        }

        throw new Error('retrived data is null')
      })
      .flat()

    return formattedGoodsData
  } catch (error) {
    return []
  }
}
