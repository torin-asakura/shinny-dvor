import fetch          from 'node-fetch'
import { existsSync } from 'fs'
import { mkdirSync }  from 'fs'
import { writeFile }  from 'fs'
import cron from 'node-cron'

const servicePrices = async () => {
  const API_URL = 'https://api.aqsi.ru/pub/v2/'
  const GOODS_LIST = 'Goods/list'

  const goodsResponse = await fetch(`${API_URL}${GOODS_LIST}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-client-key': `Application ${process.env.API_KEY || ''}`,
    },
  })

  const goodsData: any = await goodsResponse.json()

  const formattedGoodsData = goodsData.rows.map(({ id, name, price }) => ({ id, name, price }))

  const data = JSON.stringify(formattedGoodsData, null, 2)

  if (!existsSync(`./prices/service-entrypoint/src/result`))
    mkdirSync(`./prices/service-entrypoint/src/result`)

  writeFile('./prices/service-entrypoint/src/result/goods_list.json', data, (err) => {
    if (err) throw err

    // eslint-disable-next-line
    console.log('Goods data written successfully')
  })
}

const task = cron.schedule('0 0 * * 0', () => {
  servicePrices()
})

task.start()

export { servicePrices }
