import type { FormattedAqsiDataType } from '../../helpers/index.js'

import { formatAqsiDataHelper }       from '../../helpers/index.js'
import { getAqsiRawData }             from '../aqsi-raw-data-getter/index.js'

export const getAqsiData = async (): Promise<FormattedAqsiDataType> => {
  const aqsiRawData = await getAqsiRawData()
  const aqsiFormttedData = formatAqsiDataHelper(aqsiRawData)
  return aqsiFormttedData
}
