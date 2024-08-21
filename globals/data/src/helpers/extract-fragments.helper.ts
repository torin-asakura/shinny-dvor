import type { ExtractFragments } from './extract-fragments.interface.js'

export const extractFragments: ExtractFragments = (id, params, fragments) =>
  fragments?.filter((fragment) => fragment[params].fragmentId === id)
