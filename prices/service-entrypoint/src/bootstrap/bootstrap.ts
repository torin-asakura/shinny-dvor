/* eslint-disable */

import * as Sentry             from '@sentry/node'

import { API_URL }             from '../http/index.js'
import { GOODS_LIST_PATH }     from '../http/index.js'
import { GOODS_CATEGORY_PATH } from '../http/index.js'
import { generateYandexXml }   from '../generator/index.js'
import { generate2gisXml }     from '../generator/index.js'
import { fetchData }           from '../http/index.js'

const sentryDsn =
  process.env.SENTRY_DSN ?? 'https://aeae54efe3df4eac9f5ccebb4aa67476@logger.atls.tech/4'

if (process.env.NODE_ENV === 'production') Sentry.init({ dsn: sentryDsn })

const getBootstrap = (logger: any) => {
  const bootstrap = async () => {
    logger.info('initializing')

    const goodsResponse = await fetchData(`${API_URL}${GOODS_LIST_PATH}`)
    const goodsCategoryResponse = await fetchData(`${API_URL}${GOODS_CATEGORY_PATH}`)

    const jsonGoodsData: any = await goodsResponse

    const jsonGoodsCategoryData: any = await goodsCategoryResponse

    const queryPromises: Array<Promise<any>> = [...Array(jsonGoodsData.pages)].map(async (
      _,
      index
    ) => fetchData(`${API_URL}${GOODS_LIST_PATH}?pageNumber=${index}`))

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

    const formattedGoodsCategoryData_2gis = jsonGoodsCategoryData
      // @ts-expect-error any
      .map(({ id, name }) => ({ id, name }))
      .flat()

    const formattedGoodsData_2gis = retrievedData
      .map((item) => {
        // @ts-expect-error any
        return item.rows.map((row) => {
          const { id, group_id, name, price } = row

          const findedRow = formattedGoodsCategoryData_2gis.find(({ id }) => id === group_id)
          if (findedRow) {
            console.log(findedRow.name, name)
          }

          return {
            id,
            group_id,
            name,
            price,
          }
        })
      })
      .flat()

    console.log(formattedGoodsCategoryData_2gis)

    const formattedGoodsCategoryDataDeep = jsonGoodsCategoryData
      // @ts-expect-error any
      .filter((category) => category.children.length)
      // @ts-expect-error any
      .map((item) => item.children.map(({ id, name }) => ({ id, name })))
      .flat()

    const goodsData = formattedGoodsData
    const goodsCategoryData = [...formattedGoodsCategoryData, ...formattedGoodsCategoryDataDeep]

    if (goodsData.length && goodsCategoryData.length) {
      // generateYandexXml(goodsData, goodsCategoryData)
      generate2gisXml(goodsData, [...formattedGoodsCategoryData])
    }
  }

  return bootstrap
}

export { getBootstrap }
