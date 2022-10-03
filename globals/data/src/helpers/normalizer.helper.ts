import { normalizeString } from './normalize-string.helper'

const normalizer = (dataArray) =>
  dataArray.map(({ content, title, ...item }) => ({
    ...item,
    title: normalizeString(title),
    content: normalizeString(content),
  }))

export { normalizer }
