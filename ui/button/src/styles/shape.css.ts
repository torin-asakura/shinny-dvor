import { createShapeStyles } from '@atls-ui-parts/button'
import { style }             from '@vanilla-extract/css'

import { vars }              from '@ui/theme'

const smallStyles = createShapeStyles({
  size: vars.spaces['g40'],
  rounding: vars.radii['large.huge'],
  fontFamily: vars.fonts['primary'],
  fontSize: vars.fontSizes['normal.reduced'],
  fontWeight: vars.fontWeights['semiBold'],
  paddingLeft: vars.spaces['g16'],
  paddingRight: vars.spaces['g16'],
})

const ghostStyles = createShapeStyles({
  size: 'auto',
  paddingLeft: vars.spaces['zero'],
  paddingRight: vars.spaces['zero'],
})

const commonStyles = createShapeStyles({
  size: vars.spaces['g48'],
  rounding: vars.radii['large.huge'],
  fontFamily: vars.fonts['primary'],
  fontSize: vars.fontSizes['normal.reduced'],
  fontWeight: vars.fontWeights['semiBold'],
  paddingLeft: vars.spaces['g24'],
  paddingRight: vars.spaces['g24'],
})

const largeStyles = createShapeStyles({
  size: vars.spaces['g56'],
  rounding: vars.radii['large.huge'],
  fontFamily: vars.fonts['primary'],
  fontSize: vars.fontSizes['normal.reduced'],
  fontWeight: vars.fontWeights['semiBold'],
  paddingLeft: vars.spaces['g24'],
  paddingRight: vars.spaces['g24'],
})

const fillStyles = style({
  height: '100%',
  width: '100%',
})

export const shapeStyles = {
  ghost: ghostStyles,
  small: smallStyles,
  common: commonStyles,
  large: largeStyles,
  fill: fillStyles,
}
