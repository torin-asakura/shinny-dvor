import { API_URL }         from '../http/index.js'
import { GOODS_LIST_PATH } from '../http/index.js'
import { fetchData }       from '../http/index.js'

export const mapGoodsFetchPromises = (pages: number) => {
  return [...Array(pages)].map(async (_, index) =>
    fetchData(`${API_URL}${GOODS_LIST_PATH}?pageNumber=${index}`))
}
