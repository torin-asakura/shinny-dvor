/* eslint-disable */

const stringSeparator = (string: string) => {
  const firstPart = string.split('|n|')[0]
  const secondPart = string.split('|n|')[1]

  return {
    firstPart,
    secondPart,
  }
}

export { stringSeparator }
