/* eslint-disable */
import * as fs                 from 'fs/promises'

import { Logger }              from '@atls/logger'
import { S3Client }            from '@aws-sdk/client-s3'
import { PutObjectCommand }    from '@aws-sdk/client-s3'

import { getYandexYmlData }    from '../getters/index.js'
import { getYandexOffers }     from '../getters/index.js'
import { getYandexCategories } from '../getters/index.js'
import { get2gisCategories }   from '../getters/index.js'
import { convertYmlDataToXml } from '../helpers/convert-yml-data-to-xml.helper.js'

// @ts-expect-error any
export const generateYandexXml = async (goodsData, goodsCategoryData) => {
  const logger = new Logger('yandex-xml-generator')

  const twoGisCategories = get2gisCategories(goodsCategoryData)

  // const yandexCategories = getYandexCategories(goodsCategoryData)
  // const yandexOffers = getYandexOffers(goodsData)
  // const yandexYmlData = getYandexYmlData({ categories: yandexCategories, offers: yandexOffers })
  // const yandexXml = convertYmlDataToXml(yandexYmlData)
  // await fs.writeFile('./src/result/yandex-prices.xml', yandexXml)

  // console.log(`${xml}`)

  // logger.debug(`Endpoint: ${process.env.FILES_STORAGE_REGION}`)
  //
  // const s3Client = new S3Client({
  //   endpoint: process.env.FILES_STORAGE_HOST,
  //   region: process.env.FILES_STORAGE_REGION,
  //   credentials: {
  //     accessKeyId: process.env.YC_SA_KEY_ID!,
  //     secretAccessKey: process.env.YC_SA_SECRET_KEY!,
  //   },
  // })
  //
  // try {
  //   const KEY = `prices-${new Date().toISOString()}.xml`
  //
  //   await s3Client.send(
  //     new PutObjectCommand({
  //       Bucket: process.env.BUCKET_NAME || '',
  //       Key: `prices-${new Date().toISOString()}.xml`,
  //       Body: xml,
  //     })
  //   )
  //
  //   logger.info(`${KEY} uploaded successfully.`)
  // } catch (error) {
  //   logger.error(error)
  // }
  //
  // try {
  //   const KEY = `prices-latest.xml`
  //
  //   await s3Client.send(
  //     new PutObjectCommand({
  //       Bucket: process.env.BUCKET_NAME || '',
  //       Key: KEY,
  //       Body: xml,
  //     })
  //   )
  //
  //   logger.info(`${KEY} uploaded successfully.`)
  // } catch (error) {
  //   if (error) logger.error(error)
  // }
}
