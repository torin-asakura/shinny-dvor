const extractFragments = (id: string, params: string, fragments) =>
  fragments?.filter((fragment) => fragment[params].fragmentId === id)

export { extractFragments }
