const stringSeparator = (string: string) => {
  const buffer = string?.replace(/(<p>|<\/p>)/g, '').replace(/(&#8211;)/g, '-')

  const firstPart = buffer?.substring(0, buffer.indexOf('<br>'))
  const secondPart = buffer?.slice(buffer.indexOf('<br>'))

  return {
    firstPart,
    secondPart,
  }
}

export { stringSeparator }
