const extractor = (data: any[], key: string, determiner: string) => {
  if (key === 'id') {
    return data.filter(({ id }) => id === determiner)[0]?.title
  }

  if (key === 'featuredImage') {
    return data.filter(({ id }) => id === determiner)[0]?.featuredImage
  }

  return ''
}

export { extractor }
