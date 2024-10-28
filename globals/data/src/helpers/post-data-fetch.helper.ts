import type { PostDataFetchType } from './post-data-fetch.interface.js'

const postDataFetch: PostDataFetchType = async ({ url, data }) =>
  fetch(url, {
    method: 'post',
    body: JSON.stringify(data),
  })

export { postDataFetch }
