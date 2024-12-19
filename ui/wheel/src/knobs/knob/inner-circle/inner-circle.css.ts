import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars }   from '@ui/theme'

const baseInnerCircleStyles = style({
  width: 16,
  height: 16,
  backgroundColor: vars.colors.primaryBlue,
  borderRadius: vars.radii.default,
  transition: '.5s',
})

const hoverInnerCircleStyles = {
  defaultHover: style({
    backgroundColor: vars.colors.white,
  }),
}
export const innerCircleStyles = recipe({
  base: baseInnerCircleStyles,
  variants: {
    hover: hoverInnerCircleStyles,
  },
})
