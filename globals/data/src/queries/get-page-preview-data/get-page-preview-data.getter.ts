import { GET_PREVIEW } from './get-page-preview-data.query.js'

const getPagePreviewData = async (client, context) => {
  const { data: previewData } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/cover/',
    },
    context,
  })

  return previewData
}

export { getPagePreviewData }
