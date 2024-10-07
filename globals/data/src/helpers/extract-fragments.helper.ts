/* eslint-disable */

// @ts-expect-error any type
const extractFragments = (id: string, params: string, fragments) =>
  // @ts-expect-error any type
  fragments?.filter((fragment) => fragment[params].fragmentId === id)

export { extractFragments }
