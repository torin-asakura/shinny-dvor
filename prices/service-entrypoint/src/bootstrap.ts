import * as Sentry             from '@sentry/node'

import { Logger }              from '@atls/logger'

import { CronJob }             from 'cron'

import { API_URL }             from './http/index.js'
import { GOODS_LIST_PATH }     from './http/index.js'
import { GOODS_CATEGORY_PATH } from './http/index.js'
import { generateXml }         from './generator/index.js'
import { fetchData }           from './http/index.js'

const logger = new Logger('Bootstrap')

const sentryDsn =
  process.env.SENTRY_DSN ?? 'https://aeae54efe3df4eac9f5ccebb4aa67476@logger.atls.tech/4'

if (process.env.NODE_ENV === 'production') Sentry.init({ dsn: sentryDsn })

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
      // @ts-expect-error any
      item.rows.map(({ id, group_id, name, price }) => ({
        id,
        group_id,
        name,
        price,
      })))
    .flat()

  const formattedGoodsCategoryData = jsonGoodsCategoryData
    // @ts-expect-error any
    .filter((item) => !item.children.length)
    // @ts-expect-error any
    .map(({ id, name }) => ({ id, name }))
    .flat()

  const formattedGoodsCategoryDataDeep = jsonGoodsCategoryData
    // @ts-expect-error any
    .filter((category) => category.children.length)
    // @ts-expect-error any
    .map((item) => item.children.map(({ id, name }) => ({ id, name })))
    .flat()

  const goodsData = formattedGoodsData
  const goodsCategoryData = [...formattedGoodsCategoryData, ...formattedGoodsCategoryDataDeep]

  if (goodsData.length && goodsCategoryData.length) generateXml(goodsData, goodsCategoryData)
}

const task = new CronJob('0 0 * * 0', () => {
  logger.info('task started')

  bootstrap()

  logger.info('task completed')
})

task.start()

bootstrap()
