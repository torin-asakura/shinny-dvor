import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_UI = gql`
  query GetUi {
    uiItems {
      nodes {
        contentAddons {
          image {
            altText
            sourceUrl
          }
          role
        }
      }
    }
  }
`

const runUiQuery = async () => {
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

export { runUiQuery }
