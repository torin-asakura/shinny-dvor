import { useSuspenseQuery } from '@apollo/client'

import { GET_UI }           from './get-ui-data.query.js'

const getUiData = () => {
  const { data } = useSuspenseQuery(GET_UI)

  if (data) {
    return {
      ui: data.uiItems.nodes,
    }
  }

  return { ui: [] }
}

export { getUiData }
