/* eslint-disable */

import * as Sentry               from '@sentry/node'

import { API_URL }               from '../http/index.js'
import { GOODS_LIST_PATH }       from '../http/index.js'
import { GOODS_CATEGORY_PATH }   from '../http/index.js'
import { generateYandexXml }     from '../generator/index.js'
import { generate2gisXml }       from '../generator/index.js'
import { getGoodsFetchPromises } from '../getters/index.js'
import { getYandexData }         from '../getters/index.js'
import { get2gisData }           from '../getters/index.js'
import { fetchData }             from '../http/index.js'

const sentryDsn =
  process.env.SENTRY_DSN ?? 'https://aeae54efe3df4eac9f5ccebb4aa67476@logger.atls.tech/4'

if (process.env.NODE_ENV === 'production') Sentry.init({ dsn: sentryDsn })

const getBootstrap = (logger: any) => {
  const bootstrap = async () => {
    logger.info('initializing')

    const goodsData_json = await fetchData(`${API_URL}${GOODS_LIST_PATH}`)
    const goodsCategoryData_json = await fetchData(`${API_URL}${GOODS_CATEGORY_PATH}`)

    const goodsData_promises = getGoodsFetchPromises(goodsData_json.pages)
    const goodsData_resolved = await Promise.all(goodsData_promises)

    const [goodsData_yandex, goodsCategoryData_yandex] = getYandexData(
      goodsData_resolved,
      goodsCategoryData_json
    )

    const [goodsData_2gis, goodsCategoryData_2gis] = get2gisData(
      goodsData_resolved,
      goodsCategoryData_json
    )

    if (goodsData_2gis.length && goodsCategoryData_2gis.length) {
      generate2gisXml(goodsData_2gis, goodsCategoryData_2gis)
    } else {
      logger.error('2gis-data is empty')
    }

    if (goodsData_yandex.length && goodsCategoryData_yandex.length) {
      generateYandexXml(goodsData_yandex, goodsCategoryData_yandex)
    } else {
      logger.error('yandex-data is empty')
    }
  }

  return bootstrap
}

export { getBootstrap }
