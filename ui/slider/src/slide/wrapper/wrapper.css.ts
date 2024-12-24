import { style } from '@vanilla-extract/css'

export const wrapperBase = style({
  width: '100%',
  transition: 'transform 0.3s',
})

export const wrapperActive = style({
  transform: 'scaleY(1)',
})

export const wrapperInactive = style({
  transform: 'scaleY(0.9)',
})
