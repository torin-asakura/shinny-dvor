import * as fs                 from 'fs/promises'

import { Logger }              from '@atls/logger'

import { get2gisCategories }   from '../getters/index.js'
import { get2gisOffers }       from '../getters/index.js'
import { getYandexYmlData }    from '../getters/index.js'
import { convertYmlDataToXml } from '../helpers/index.js'

export const generate2gisXml = async (goodsData, goodsCategoryData) => {
  const logger = new Logger('2gis-xml-generator')

  const twoGisCategories = get2gisCategories(goodsCategoryData)
  const twoGisOffers = get2gisOffers(goodsData)

  const twoGisYmlData = getYandexYmlData({ category: twoGisCategories, offer: twoGisOffers })
  const twoGisXml = convertYmlDataToXml(twoGisYmlData)

  if (process.env.NODE_ENV === 'development') {
    const xmlPath = './src/result/2gis-prices.xml'
    await fs.writeFile(xmlPath, twoGisXml)
    logger.info(`write 2gis-xml to ${xmlPath}`)
  }
}
