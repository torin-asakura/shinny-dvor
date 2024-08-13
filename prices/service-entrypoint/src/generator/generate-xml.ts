import { Logger }     from '@atls/logger'
import { js2xml }     from 'xml-js'
import AWS            from 'aws-sdk'

import { imagesData } from '../images-data'

const generateXml = (goodsData, goodsCategoryData) => {
  const logger = new Logger('XML-Generator')

  const category = goodsCategoryData.map(({ id, name }) => ({
    _attributes: {
      id,
    },
    _text: name,
  }))

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

  const s3 = new AWS.S3({
    endpoint: process.env.FILES_STORAGE_HOST,
    region: process.env.FILES_STORAGE_REGION,
    accessKeyId: process.env.YC_SA_KEY_ID,
    secretAccessKey: process.env.YC_SA_SECRET_KEY,
  })

  s3.upload(
    {
      Bucket: process.env.BUCKET_NAME || '',
      Key: `prices-${new Date().toISOString()}.xml`,
      Body: xml,
    },
    (err, data) => {
      if (err) logger.error(err)

      logger.info(`File uploaded on ${data.Location}`)
    }
  )

  s3.upload(
    {
      Bucket: process.env.BUCKET_NAME || '',
      Key: `prices-latest.xml`,
      Body: xml,
    },
    (err, data) => {
      if (err) logger.error(err)

      logger.info(`Latest file uploaded on ${data.Location}`)
    }
  )
}

export { generateXml }
