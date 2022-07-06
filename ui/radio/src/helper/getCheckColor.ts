export const getCheckColor = (hover: any, checked: boolean): string => {
  let newColor = 'black'
  if (hover && !checked) {
    newColor = 'primaryBlue'
  } else if (checked) {
    newColor = 'white'
  }
  return newColor
}
