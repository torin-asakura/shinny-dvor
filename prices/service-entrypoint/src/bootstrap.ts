import { Logger }         from '@atls/logger'

import cron               from 'node-cron'
import { existsSync }     from 'fs'
import { mkdirSync }      from 'fs'
import { writeFile }      from 'fs'
import { writeFileSync }  from 'fs'

import { API_URL }        from './http'
import { GOODS_CATEGORY } from './http'
import { GOODS_LIST }     from './http'
import { generateXml }    from './generator'
import { fetchData }      from './http'
import { pretty }         from './utils'

const bootstrap = async () => {
  const logger = new Logger('Prices')

  const path = './prices/service-entrypoint/src/result'

  const goodsResponse = await fetchData(`${API_URL}${GOODS_LIST}`)
  const goodsCategoryResponse = await fetchData(`${API_URL}${GOODS_CATEGORY}`)

  const goodsData: any = await goodsResponse.json()
  const goodsCategoryData: any = await goodsCategoryResponse.json()

  const formattedGoodsCategoryData = goodsCategoryData
    .map((category) => category.children.map(({ id, name }) => ({ id, name })))
    .filter((item) => item.length)
    .flat()

  const formattedGoodsData = goodsData.rows.map(({ id, group_id, name, price }) => ({
    id,
    group_id,
    name,
    price,
  }))

  const jsonGoodsData = JSON.stringify(formattedGoodsData, null, 2) || ''
  const jsonGoodsCategoryData = JSON.stringify(formattedGoodsCategoryData, null, 2) || ''

  const indexFile = pretty(`
     export { default as goods } from './goods_list.json'
     export { default as goodsCategory } from './goods_category.json'   
  `)

  if (!existsSync(`${path}`)) mkdirSync(`${path}`)

  writeFile(`${path}/goods_category.json`, jsonGoodsCategoryData, (err) => {
    if (err) throw err

    logger.info('goods category data written successfully')
  })

  writeFile(`${path}/goods_list.json`, jsonGoodsData, (err) => {
    if (err) throw err

    logger.info('goods data written successfully')
  })

  writeFileSync(`${path}/index.ts`, indexFile)

  if (formattedGoodsCategoryData.length && formattedGoodsData.length) generateXml()
}

const task = cron.schedule('0 0 * * 0', () => {
  bootstrap()
})

task.start()
