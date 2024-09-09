import { Logger }           from '@atls/logger'
import { S3Client }         from '@aws-sdk/client-s3'
import { PutObjectCommand } from '@aws-sdk/client-s3'

import { js2xml }           from 'xml-js'

import { imagesData }       from '../images-data/index.js'

// @ts-expect-error any
const generateXml = async (goodsData, goodsCategoryData) => {
  const logger = new Logger('XML-Generator')

  // @ts-expect-error any
  const category = goodsCategoryData.map(({ id, name }) => ({
    _attributes: {
      id,
    },
    _text: name,
  }))

  // @ts-expect-error any
  const offer = goodsData.map(({ id, group_id, name, price }) => ({
    _attributes: {
      id,
    },
    name: {
      _text: name,
    },
    vendor: {
      _text: 'Шинный двор',
    },
    price: {
      _text: price,
    },
    currencyId: {
      _text: 'RUB',
    },
    categoryId: {
      _text: group_id,
    },
    picture: {
      _text: imagesData
        .map((item) => {
          if (item.id === id) return item.url

          return ''
        })
        .join(''),
    },
    description: {
      _text: name,
    },
  }))

  const YML = {
    _declaration: {
      _attributes: {
        version: '1.0',
        encoding: 'UTF-8',
      },
    },
    yml_catalog: {
      shop: {
        categories: {
          category,
        },
        offers: {
          offer,
        },
      },
    },
  }

  const xml = js2xml(YML, { compact: true, spaces: 2 })

  const s3Client = new S3Client({
    endpoint: process.env.FILES_STORAGE_HOST,
    region: process.env.FILES_STORAGE_REGION,
    // accessKeyId: process.env.YC_SA_KEY_ID,
    // secretAccessKey: process.env.YC_SA_SECRET_KEY,
  })

  try {
    const KEY = `prices-${new Date().toISOString()}.xml`

    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME || '',
        Key: `prices-${new Date().toISOString()}.xml`,
        Body: xml,
      })
    )

    logger.info(`${KEY} uploaded successfully.`)
  } catch (error) {
    logger.error(error)
  }

  try {
    const KEY = `prices-latest.xml`

    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME || '',
        Key: KEY,
        Body: xml,
      })
    )

    logger.info(`${KEY} uploaded successfully.`)
  } catch (error) {
    if (error) logger.error(error)
  }
}

export { generateXml }
