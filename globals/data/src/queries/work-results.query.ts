import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_WORK_RESULTS = gql`
  query GetServices {
    workResultItems {
      nodes {
        workResultParams {
          fragmentId
          time
          price
          description
          photos {
            firstPhoto {
              sourceUrl
            }
            secondPhoto {
              sourceUrl
            }
          }
        }
      }
    }
  }
`

const runWorkResultsQuery = async () => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_WORK_RESULTS,
  })

  if (data) {
    return {
      workResults: data.workResultItems.nodes,
    }
  }

  return { workResults: [] }
}

export { runWorkResultsQuery }
