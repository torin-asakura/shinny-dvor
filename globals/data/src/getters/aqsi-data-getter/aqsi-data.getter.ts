import type { ServicesDataToReplaceType } from '../../interfaces/index.js'

import { REQUEST_URL }                    from './aqsi-data.constants.js'
import { NullResponseError }              from './error/null-response.error.js'
import { fetchAqsiDataHelper }            from './fetch-data/index.js'
import { formatOutputDataHelper }         from './format-output-data-helper/index.js'
import { formatPagesDataHelper }          from './format-pages-data-helper/index.js'

export const getAqsiData = async (): Promise<ServicesDataToReplaceType> => {
  try {
    const godsListResponse = await fetchAqsiDataHelper(REQUEST_URL)
    const godsListData = await godsListResponse.json()

    if (godsListData === null) throw new NullResponseError()

    const godsListPages = [...Array(godsListData.pages)]
    const pagePromises = godsListPages.map(async (_, index) =>
      fetchAqsiDataHelper(`${REQUEST_URL}?pageNumber=${index}`))
    const pageResponses = await Promise.all(pagePromises)

    const formattedPagesData = await formatPagesDataHelper(pageResponses)

    const outputData = formatOutputDataHelper(formattedPagesData)
    return outputData
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return []
  }
}
