const extractFragments = (id: string, params: string, fragments: Array<any>) =>
  fragments?.filter((fragment) => fragment[params].fragmentId === id)

export { extractFragments }
