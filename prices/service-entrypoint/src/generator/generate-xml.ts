import { writeFileSync } from 'fs'

import { imagesData }    from '../images-data'
import { goods }         from '../result'
import { goodsCategory } from '../result'

const generateXml = () => {
  const xmlFile = `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog>
  <shop>
    <categories>${goodsCategory
      .map(
        ({ id, name }) => `
      <category id="${id}">${name}</category>`
      )
      .join('')}
    </categories>
    <offers>${goods
      .map(
        ({ id, group_id, name, price }) => `
      <offer id="${id}">
        <name>${name}</name>
        <vendor>Шинный двор</vendor>
        <price>${price}</price>
        <currencyId>RUB</currencyId>
        <categoryId>${group_id}</categoryId>
        <picture>${imagesData
          .map((item) => {
            if (item.id === id) return item.url

            return ''
          })
          .join('')}</picture>
        <description>${name}</description>
      </offer>`
      )
      .join('')}
    </offers>
  </shop>
</yml_catalog>`

  writeFileSync('./prices/service-entrypoint/src/result/prices.xml', xmlFile)
}

export { generateXml }
