import type { QueryDataType }  from '../interfaces/index.js'

import { Logger }              from '@atls/logger'
import { Injectable }          from '@nestjs/common'

import { formatYmlData }       from '../formatters/index.js'
import { formantYmlDataToXml } from '../formatters/index.js'
import { getYandexData }       from '../getters/index.js'
import { writeXmlHelper }      from '../helpers/index.js'
import { mapYandexOffers }     from '../mappers/index.js'
import { mapYandexCategories } from '../mappers/index.js'

@Injectable()
export class GetYandexPricesXmlService {
  async process(queryData: QueryDataType): Promise<string> {
    const logger = new Logger('update-yandex-prices-use-case')

    const [goodsDataYandex, goodsCategoryDataYandex] = getYandexData(
      queryData.goodsPagesData,
      queryData.goodsCategoryData
    )

    const yandexCategories = mapYandexCategories(goodsCategoryDataYandex)
    const yandexOffers = mapYandexOffers(goodsDataYandex)

    const yandexYmlData = formatYmlData(yandexCategories, yandexOffers)
    const yandexXml = formantYmlDataToXml(yandexYmlData)

    await writeXmlHelper({
      path: './src/result/yandex-prices.xml',
      xml: yandexXml,
      logger,
    })

    return yandexXml
  }
}
