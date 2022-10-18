import { gql }       from '@apollo/client'

import { getClient } from '../../helpers'

const GET_SCHEMA = gql`
  query GetSchema {
    __schema {
      types {
        name
        fields {
          name
        }
      }
    }
  }
`

const useSchema = async () => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_SCHEMA,
  })

  if (data) {
    return {
      schema: data.__schema.types,
    }
  }

  return { schema: [] }
}

export { useSchema }
