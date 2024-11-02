// TODO
/* eslint-disable */
import type { GetAqsiDataReturnType } from './aqsi-data.interfaces.js'

import { GOODS_LIST_PATH }            from './aqsi-data.constants.js'
import { AQSI_API_URL }               from './aqsi-data.constants.js'
import { fetchAqsiDataHelper }        from '../helpers/index.js'

export const getAqsiData = async (): Promise<GetAqsiDataReturnType> => {
  const requestUrl = `${AQSI_API_URL}${GOODS_LIST_PATH}`

  const jsonGoodsData: any = await fetchAqsiDataHelper(requestUrl)

  const queryPromises: Array<Promise<any>> = [...Array(jsonGoodsData.pages)].map(async (_, index) =>
    fetchAqsiDataHelper(`${AQSI_API_URL}${GOODS_LIST_PATH}?pageNumber=${index}`))

  const retrievedData = await Promise.all(queryPromises)

  if (retrievedData[0].message === 'Unauthorized') return []

  const formattedGoodsData = retrievedData
    .map((item) =>
      // @ts-expect-error any
      item.rows.map(({ id, group_id, name, price }) => ({
        id,
        group_id,
        name,
        price,
      })))
    .flat()

  return formattedGoodsData as GetAqsiDataReturnType
}
