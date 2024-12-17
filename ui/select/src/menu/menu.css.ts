import { style } from '@vanilla-extract/css'

import { vars }   from '@ui/theme'

export const menuBase = style({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  listStyleType: 'none',
  outline: 'none',
  padding: 0,
  zIndex: 9999,
})

export const menuShape = style({
  borderRadius: vars.radii.mini,
  fontFamily: vars.fonts.primary,
  marginTop: 17,
})

export const menuAppearance = style({
  backgroundColor: vars.colors.white,
  boxShadow: vars.shadows.shark,
})
