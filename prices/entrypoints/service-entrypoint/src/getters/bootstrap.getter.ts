import * as Sentry                    from '@sentry/node'

import { Logger }                     from '@atls/logger'

import { API_URL }                    from '../http/index.js'
import { GOODS_LIST_PATH }            from '../http/index.js'
import { GOODS_CATEGORY_PATH }        from '../http/index.js'
import { formatYmlData }              from '../formatters/index.js'
import { formantYmlDataToXml }        from '../formatters/index.js'
import { getYandexData }              from '../getters/index.js'
import { get2gisData }                from '../getters/index.js'
import { getS3Client }                from '../getters/index.js'
import { putObjectToS3 }              from '../helpers/index.js'
import { writeXmlHelper }             from '../helpers/index.js'
import { fetchData }                  from '../http/index.js'
import { mapYandexOffers }            from '../mappers/index.js'
import { mapYandexCategories }        from '../mappers/index.js'
import { mapGoodsFetchPromises }      from '../mappers/index.js'
import { map2gisCategories }          from '../mappers/index.js'
import { map2gisOffers }              from '../mappers/index.js'
import { goodsDataValidator }         from '../validators/index.js'
import { goodsCategoryDataValidator } from '../validators/index.js'

const sentryDsn =
  process.env.SENTRY_DSN ?? 'https://aeae54efe3df4eac9f5ccebb4aa67476@logger.atls.tech/4'

if (process.env.NODE_ENV === 'production') Sentry.init({ dsn: sentryDsn })

export const getBootstrap = (logger: Logger) => {
  try {
    const bootstrap = async (): Promise<void> => {
      logger.info('initializing')

      const goodsData_json = await fetchData(`${API_URL}${GOODS_LIST_PATH}`)
      const goodsCategoryData_json = await fetchData(`${API_URL}${GOODS_CATEGORY_PATH}`)

      const goodsData_valid = goodsDataValidator(goodsData_json)
      const goodsCategoryData_valid = goodsCategoryDataValidator(goodsCategoryData_json)

      const goodsData_promises = mapGoodsFetchPromises(goodsData_valid.pages)
      const goodsData_resolved = await Promise.all(goodsData_promises)

      const goodsData_validResolved = goodsData_resolved.map((goodsData) =>
        goodsDataValidator(goodsData))

      const [goodsData_yandex, goodsCategoryData_yandex] = getYandexData(
        goodsData_validResolved,
        goodsCategoryData_valid
      )

      const yandexCategories = mapYandexCategories(goodsCategoryData_yandex)
      const yandexOffers = mapYandexOffers(goodsData_yandex)
      const yandexYmlData = formatYmlData(yandexCategories, yandexOffers)
      const yandexXml = formantYmlDataToXml(yandexYmlData)

      await writeXmlHelper({
        path: './src/result/yandex-prices.xml',
        xml: yandexXml,
        logger,
      })

      // const s3Client = getS3Client()
      //
      // const dateString = new Date().toISOString()
      //
      // await putObjectToS3({
      //   s3Client,
      //   xml: yandexXml,
      //   key: `prices-${dateString}.xml`,
      //   logger,
      // })
      //
      // await putObjectToS3({
      //   s3Client,
      //   xml: yandexXml,
      //   key: `prices-latest.xml`,
      //   logger,
      // })

      const [goodsData_2gis, goodsCategoryData_2gis] = get2gisData(
        goodsData_validResolved,
        goodsCategoryData_json
      )

      const twoGisCategories = map2gisCategories(goodsCategoryData_2gis)
      const twoGisOffers = map2gisOffers(goodsData_2gis)
      const twoGisYmlData = formatYmlData(twoGisCategories, twoGisOffers)
      const twoGisXml = formantYmlDataToXml(twoGisYmlData)

      await writeXmlHelper({
        path: './src/result/2gis-prices.xml',
        xml: twoGisXml,
        logger,
      })

      // await putObjectToS3({
      //   s3Client,
      //   xml: twoGisXml,
      //   key: `two-gis-prices-${dateString}.xml`,
      //   logger,
      // })
      //
      // await putObjectToS3({
      //   s3Client,
      //   xml: twoGisXml,
      //   key: `two-gis-prices-latest.xml`,
      //   logger,
      // })
    }

    return bootstrap
  } catch (error) {
    logger.error(error)
    return
  }
}
