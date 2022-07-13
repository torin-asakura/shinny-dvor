const extractor = (data: any[], key: string, object: string) =>
  data.filter(({ fragmentParams }) => fragmentParams.object === object)[0]?.[key]

export { extractor }
