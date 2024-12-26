import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars }   from '@ui/theme'

export const positionStyles = style({
  margin: '24px',
})

export const appearanceStyles = style({
  color: vars.colors.black,
})

export const shapeStyles = style({
  fontSize: vars.fontSizes.normal,
  fontWeight: vars.fontWeights.normal,
  fontFamily: vars.fonts.primary,
})

export const labelStyles = recipe({
  base: [positionStyles, appearanceStyles, shapeStyles],
})
