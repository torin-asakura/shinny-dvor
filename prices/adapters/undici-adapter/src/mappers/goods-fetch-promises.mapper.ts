import { API_URL }         from '../constants/index.js'
import { GOODS_LIST_PATH } from '../constants/index.js'
import { fetchData }       from '../helpers/index.js'

export const mapGoodsFetchPromises = (pages: number) => {
  return [...Array(pages)].map(async (_, index) =>
    fetchData(`${API_URL}${GOODS_LIST_PATH}?pageNumber=${index}`))
}
