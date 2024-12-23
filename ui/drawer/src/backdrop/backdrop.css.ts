import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const baseBackdropStyles = style({
  backgroundColor: vars.colors.black,
  opacity: 0.5,
  width: '100%',
  height: '100%',
  cursor: 'pointer',
})
