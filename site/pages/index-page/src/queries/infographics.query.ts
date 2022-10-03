import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_INFOGRAPHICS = gql`
  query GetInfographics {
    infographicItems {
      nodes {
        contentAddons {
          title
          role
          image {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`

const runInfographicsQuery = async () => {
  const client = getClient()

  const { data: infographicsData } = await client.query({
    query: GET_INFOGRAPHICS,
  })

  if (infographicsData) {
    return {
      infographics: infographicsData.infographicItems.nodes,
    }
  }

  return { infographics: [] }
}

export { runInfographicsQuery }
