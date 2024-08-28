import type { GetCheckColorType } from './get-check-color.interface.js'

export const getCheckColor: GetCheckColorType = (hover, checked) => {
  let newColor = 'black'

  if (hover && !checked) {
    newColor = 'primaryBlue'
  } else if (checked) {
    newColor = 'white'
  }

  return newColor
}
