/* eslint-disable dot-notation */

import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const baseStyles = style({
  fontFamily: vars.fonts.primary,
  fontWeight: vars.fontWeights.normal,
  height: vars.spaces['g32'],
  fontSize: vars.fontSizes['normal.reduced'],
  color: vars.colors.black,
  backgroundColor: vars.colors.white,
  lineHeight: vars.lineHeights.medium,
})
