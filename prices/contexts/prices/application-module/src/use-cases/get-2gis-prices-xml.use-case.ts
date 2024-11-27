import { Logger }              from '@atls/logger'
import { Injectable }          from '@nestjs/common'

import { formatYmlData }       from '../formatters/index.js'
import { formantYmlDataToXml } from '../formatters/index.js'
import { get2gisData }         from '../getters/index.js'
import { writeXmlHelper }      from '../helpers/index.js'
import { map2gisCategories }   from '../mappers/index.js'
import { map2gisOffers }       from '../mappers/index.js'

@Injectable()
export class Get2gisPricesXmlUseCase {
  // TODO interface
  async execute(queryData): Promise<any> {
    const logger = new Logger('update-2gis-prices-use-case')

    const [goodsData_2gis, goodsCategoryData_2gis] = get2gisData(
      queryData.goodsPagesData,
      queryData.goodsCategoryData
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
  }
}
