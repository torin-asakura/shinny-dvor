/* eslint-disable dot-notation */

import { createShapeStyles } from '@atls-ui-parts/button'
import { style }             from '@vanilla-extract/css'

import { vars }              from '@ui/theme'

const smallStyles = createShapeStyles({
  size: vars.spaces['g40'],
  rounding: vars.radii['large.huge'],
  fontFamily: vars.fonts['primary'],
  fontSize: 16,
  fontWeight: vars.fontWeights['semiBold'],
  paddingLeft: vars.spaces['g16'],
  paddingRight: vars.spaces['g16'],
})

const ghostStyles = createShapeStyles({
  size: 'auto',
  fontFamily: vars.fonts['primary'],
  fontSize: vars.fontSizes['normal.reduced'] as unknown as number,
  paddingLeft: vars.spaces['zero'],
  paddingRight: vars.spaces['zero'],
})

const roundStyles = createShapeStyles({
  size: vars.spaces['g48'],
  rounding: vars.radii['large.huge'],
  fontFamily: vars.fonts['primary'],
  fontSize: 16,
  fontWeight: vars.fontWeights['semiBold'],
})

const commonStyles = createShapeStyles({
  size: vars.spaces['g48'],
  rounding: vars.radii['large.huge'],
  fontFamily: vars.fonts['primary'],
  fontSize: 16,
  fontWeight: vars.fontWeights['semiBold'],
  paddingLeft: vars.spaces['g24'],
  paddingRight: vars.spaces['g24'],
})

const largeStyles = createShapeStyles({
  size: vars.spaces['g56'],
  rounding: vars.radii['large.huge'],
  fontFamily: vars.fonts['primary'],
  fontSize: 16,
  fontWeight: vars.fontWeights['semiBold'],
  paddingLeft: vars.spaces['g48'],
  paddingRight: vars.spaces['g48'],
})

const fillStyles = style({
  fontFamily: vars.fonts['primary'],
  height: '100%',
  width: '100%',
})

export const shapeStyles = {
  ghost: ghostStyles,
  small: smallStyles,
  round: roundStyles,
  common: commonStyles,
  large: largeStyles,
  fill: fillStyles,
}
