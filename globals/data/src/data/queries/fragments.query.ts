import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_FRAGMENTS = gql`
  query GetFragments {
    fragments(first: 1000) {
      nodes {
        contentAddons {
          title
          content
          role
          highlightedtext
        }
      }
    }
  }
`

const runFragmentsQuery = async () => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_FRAGMENTS,
  })

  if (data) {
    return {
      fragments: data.fragments.nodes,
    }
  }

  return { fragments: [] }
}

export { runFragmentsQuery }
