import type { ExtractFragmentType } from './extract-fragment.interface.js'

export const extractFragment: ExtractFragmentType = (key, id, data) =>
  data?.filter((fragment) => fragment[key].fragmentId === id)[0]?.[key]
