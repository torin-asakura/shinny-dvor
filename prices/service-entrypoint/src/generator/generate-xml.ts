import { Logger }     from '@atls/logger'

import { writeFile }  from 'fs'
import { js2xml }     from 'xml-js'

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

  writeFile(`./prices/service-entrypoint/src/result/prices.xml`, xml, (err) => {
    if (err) throw err

    logger.info('xml file written successfully')
  })
}

export { generateXml }
