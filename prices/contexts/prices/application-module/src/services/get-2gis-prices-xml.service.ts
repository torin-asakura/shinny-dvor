import type { QueryDataType }  from '../interfaces/index.js'

import { Logger }              from '@atls/logger'
import { Injectable }          from '@nestjs/common'

import { formatYmlData }       from '../formatters/index.js'
import { formantYmlDataToXml } from '../formatters/index.js'
import { get2gisData }         from '../getters/index.js'
import { writeXmlHelper }      from '../helpers/index.js'
import { map2gisCategories }   from '../mappers/index.js'
import { map2gisOffers }       from '../mappers/index.js'

@Injectable()
export class Get2gisPricesXmlService {
  async process(queryData: QueryDataType): Promise<string> {
    const logger = new Logger('update-2gis-prices-use-case')

    const [goodsData2gis, goodsCategoryData2gis] = get2gisData(
      queryData.goodsPagesData,
      queryData.goodsCategoryData
    )

    const twoGisCategories = map2gisCategories(goodsCategoryData2gis)
    const twoGisOffers = map2gisOffers(goodsData2gis)
    const twoGisYmlData = formatYmlData(twoGisCategories, twoGisOffers)
    const twoGisXml = formantYmlDataToXml(twoGisYmlData)

    await writeXmlHelper({
      path: './src/result/2gis-prices.xml',
      xml: twoGisXml,
      logger,
    })

    return twoGisXml
  }
}
