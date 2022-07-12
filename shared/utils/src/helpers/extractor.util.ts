const extractor = (data: any[], key: string, determiner: string) =>
  data.filter(({ id }) => id === determiner)[0]?.[key]

export { extractor }
