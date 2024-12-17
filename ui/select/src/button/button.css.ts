import { style }         from '@vanilla-extract/css'
import { styleVariants } from '@vanilla-extract/css'

import { vars }          from '@ui/theme'

export const baseStyles = style({
  display: 'flex',
  position: 'relative',
  width: '100%',
  justifyContent: 'flex-start',
})

export const appearanceStyles = styleVariants({
  default: {
    color: vars.colors.steel,
    backgroundColor: vars.colors.white,
    borderColor: vars.colors.transparent,
  },
  selected: {
    color: vars.colors.black,
    backgroundColor: vars.colors.primaryBlue,
    borderColor: vars.colors.transparent,
  },
})

export const shapeStyles = style({
  height: 26,
  padding: 0,
  fontSize: vars.fontSizes.normal,
})
