import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars }    from '@ui/theme'

export const baseStyles = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  cursor: 'pointer',
})

export const shapeStyles = style({
  height: '40px',
  borderRadius: vars.radii.small,
})

export const appearanceStyles = recipe({
  base: {
    color: vars.colors.black,
  },
  variants: {
    checked: {
      true: {
        backgroundColor: vars.colors.primaryBlue,
      },
      false: {
        backgroundColor: vars.colors.lightGray,
      },
    },
  },
})
