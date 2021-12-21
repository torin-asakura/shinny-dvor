import { FC }                 from 'react'
import { GetCheckColorProps } from './getCheckColor.interface'

export const getCheckColor: FC<GetCheckColorProps> = (hover, checked) => {
  let newColor = 'black'
  if (hover && !checked) {
    newColor = '#4579FF'
  } else if (checked) {
    newColor = 'white'
  }
  return newColor
}
