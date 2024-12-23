import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const baseStyles = style({
  width: vars.spaces.fill,
  height: vars.spaces.fill,
  position: 'fixed',
  backgroundColor: vars.colors.white,
  display: 'flex',
  zIndex: vars.spaces.zIndexSecondLayer,
  overflowY: 'scroll',
})
