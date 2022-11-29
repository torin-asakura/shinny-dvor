import { writeFileSync } from 'fs'
import { js2xml }        from 'xml-js'

import { imagesData }    from '../images-data'
import { goods }         from '../result'
import { goodsCategory } from '../result'

const generateXml = () => {
  const category = goodsCategory.map(({ id, name }) => ({
    _attributes: {
      id,
    },
    _text: name,
  }))

  const offer = goods.map(({ id, group_id, name, price }) => ({
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

  writeFileSync('./prices/service-entrypoint/src/result/prices.xml', xml)
}

export { generateXml }
