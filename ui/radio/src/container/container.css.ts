import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const baseStyles = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  cursor: "pointer"
})

export const shapeStyles = style({
  height: '40px',
  borderRadius: 20,
})

// TODO: change colors
export const appearanceStyles = recipe({
  base: {
    color: 'black',
  },
  variants: {
    checked: {
      true: {
        backgroundColor: 'blue',
      },
      false: {
        backgroundColor: 'lightGray',
      },
    },
  },
})

