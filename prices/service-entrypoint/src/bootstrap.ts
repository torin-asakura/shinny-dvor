import { Logger }         from '@atls/logger'

import cron               from 'node-cron'
import { existsSync }     from 'fs'
import { mkdirSync }      from 'fs'
import { writeFile }      from 'fs'
import { writeFileSync }  from 'fs'

import { GOODS_CATEGORY } from './http'
import { GOODS_LIST }     from './http'
import { generateXml }    from './generator'
import { fetchData }      from './http'
import { pretty }         from './utils'

const bootstrap = async () => {
  const logger = new Logger('Prices')

  const path = './prices/service-entrypoint/src/result'

  const goodsResponse = await fetchData(`${process.env.API_URL}${GOODS_LIST}`)
  const goodsCategoryResponse = await fetchData(`${process.env.API_URL}${GOODS_CATEGORY}`)

  const goodsData: any = await goodsResponse.json()
  const goodsCategoryData: any = await goodsCategoryResponse.json()

  const queryPromises: Array<Promise<any>> = [...Array(goodsData.pages)].map(async (_, index) => {
    const data = await fetchData(`${process.env.API_URL}${GOODS_LIST}?pageNumber=${index}`)

    return data.json()
  })

  const retrievedData = await Promise.all(queryPromises)

  const formattedGoodsData = retrievedData
    .map((item) =>
      item.rows.map(({ id, group_id, name, price }) => ({
        id,
        group_id,
        name,
        price,
      })))
    .flat()

  const formattedGoodsCategoryData = goodsCategoryData
    .filter((item) => !item.children.length)
    .map(({ id, name }) => ({ id, name }))
    .flat()

  const formattedGoodsCategoryDataDeep = goodsCategoryData
    .filter((category) => category.children.length)
    .map((item) => item.children.map(({ id, name }) => ({ id, name })))
    .flat()

  const jsonGoodsData = JSON.stringify(formattedGoodsData, null, 2)
  const jsonGoodsCategoryData = JSON.stringify(
    [...formattedGoodsCategoryData, ...formattedGoodsCategoryDataDeep],
    null,
    2
  )

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
