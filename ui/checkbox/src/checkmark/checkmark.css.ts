import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const baseStyles = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const appearanceStyles = style({
  color: vars.colors.white,
})

export const shapeStyles = style({
  width: '20px',
  height: '20px',
})
