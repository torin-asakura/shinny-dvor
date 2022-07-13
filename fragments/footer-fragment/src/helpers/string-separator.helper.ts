const stringSeparator = (string: string) => {
  const buffer = string?.replace(/(<p>|<\/p>)/g, '').replace(/(&#8211;)/g, '-')

  const firstPart = buffer
  const secondPart = buffer

  return {
    firstPart: firstPart?.substring(0, firstPart.indexOf('<br>')),
    secondPart: secondPart?.slice(secondPart.indexOf('<br>')),
  }
}

export { stringSeparator }
