import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_WORK_EXAMPLES = gql`
  query GetWorkExamples {
    workExampleItems {
      nodes {
        contentAddons {
          title
          content
          role
        }
      }
    }
  }
`

const runWorkExamplesQuery = async () => {
  const client = getClient()

  const { data: workExamplesData } = await client.query({
    query: GET_WORK_EXAMPLES,
  })

  if (workExamplesData) {
    return {
      workExamples: workExamplesData.workExampleItems.nodes,
    }
  }

  return { workExamples: [] }
}

export { runWorkExamplesQuery }
