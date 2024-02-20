import { Logger }              from '@atls/logger'

import cron                    from 'node-cron'

import { API_URL }             from './http'
import { GOODS_LIST_PATH }     from './http'
import { GOODS_CATEGORY_PATH } from './http'
import { generateXml }         from './generator'
import { fetchData }           from './http'

const logger = new Logger('Bootstrap')

const bootstrap = async () => {
  logger.info('initializing')

  const goodsResponse = await fetchData(`${API_URL}${GOODS_LIST_PATH}`)
  const goodsCategoryResponse = await fetchData(`${API_URL}${GOODS_CATEGORY_PATH}`)

  const jsonGoodsData: any = await goodsResponse

  const jsonGoodsCategoryData: any = await goodsCategoryResponse

  const queryPromises: Array<Promise<any>> = [...Array(jsonGoodsData.pages)].map(async (_, index) =>
    fetchData(`${API_URL}${GOODS_LIST_PATH}?pageNumber=${index}`))

  const retrievedData = await Promise.all(queryPromises)

  const formattedGoodsData = retrievedData
    .map((item) =>
      item.rows.map(({ id, group_id, name, price }) => ({
        id,
        group_id,
        name,
        price,
      })))
    .flat()

  const formattedGoodsCategoryData = jsonGoodsCategoryData
    .filter((item) => !item.children.length)
    .map(({ id, name }) => ({ id, name }))
    .flat()

  const formattedGoodsCategoryDataDeep = jsonGoodsCategoryData
    .filter((category) => category.children.length)
    .map((item) => item.children.map(({ id, name }) => ({ id, name })))
    .flat()

  const goodsData = formattedGoodsData
  const goodsCategoryData = [...formattedGoodsCategoryData, ...formattedGoodsCategoryDataDeep]

  if (goodsData.length && goodsCategoryData.length) generateXml(goodsData, goodsCategoryData)
}

const task = cron.schedule('0 0 * * 0', () => {
  logger.info('task started')

  bootstrap()

  logger.info('task completed')
})

task.start()

bootstrap()
