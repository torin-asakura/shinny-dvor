export const getCheckColor = (hover, checked) => {
  let newColor = 'black'
  if (hover && !checked) {
    newColor = 'blue'
  } else if (checked) {
    newColor = 'white'
  }
  return newColor
}
