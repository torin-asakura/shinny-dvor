import { GET_UI } from './get-ui-data.query.js'

const getUiData = async (client, context) => {
  const { data } = await client.query({
    query: GET_UI,
    context,
  })

  if (data) {
    return {
      ui: data.uiItems.nodes,
    }
  }

  return { ui: [] }
}

export { getUiData }
