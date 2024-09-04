import { GET_UI }    from '@globals/data'
import { getClient } from '@globals/data'

const getUiData = async () => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_UI,
  })

  if (data) {
    return {
      ui: data.uiItems.nodes,
    }
  }

  return { ui: [] }
}

export { getUiData }
