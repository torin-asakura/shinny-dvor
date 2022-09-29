import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_FOOTER = gql`
  query GetFooter {
    footerItems {
      nodes {
        contentAddons {
          title
          role
          highlightedtext
          content
        }
      }
    }
  }
`

const runFooterQuery = async () => {
  const client = getClient()

  const { data: footerData } = await client.query({
    query: GET_FOOTER,
  })

  if (footerData) {
    return {
      footer: footerData.footerItems.nodes,
    }
  }

  return { footer: [] }
}

export { runFooterQuery }
