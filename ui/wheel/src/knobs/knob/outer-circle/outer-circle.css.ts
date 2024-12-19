import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars }   from '@ui/theme'

const baseOuterCircleStyles = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
  transform: 'scale(1)',
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.default,
  transition: '.5s',
  boxShadow: vars.shadows.default,
})

const hoverOuterCircleStyles = {
  defaultHover: style({
    transform: 'scale(1.2)',
    backgroundColor: vars.colors.primaryBlue,
  }),
}
export const outerCircleStyles = recipe({
  base: baseOuterCircleStyles,
  variants: {
    hover: hoverOuterCircleStyles,
  },
})
