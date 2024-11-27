import { Logger }              from '@atls/logger'
import { Injectable }          from '@nestjs/common'

import { formatYmlData }       from '../formatters/index.js'
import { formantYmlDataToXml } from '../formatters/index.js'
import { getYandexData }       from '../getters/index.js'
import { writeXmlHelper }      from '../helpers/index.js'
import { mapYandexOffers }     from '../mappers/index.js'
import { mapYandexCategories } from '../mappers/index.js'

@Injectable()
export class GetYandexPricesXmlUseCase {
  constructor() {}

  // TODO interface
  async execute(queryData): Promise<any> {
    const logger = new Logger('update-yandex-prices-use-case')

    const [goodsData_yandex, goodsCategoryData_yandex] = getYandexData(
      queryData.goodsPagesData,
      queryData.goodsCategoryData
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
  }
}
