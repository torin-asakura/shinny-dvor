import { style } from '@vanilla-extract/css'

export const baseContainerStyles = style({
  transition: '.35s',
  cursor: 'pointer',
})

export const openStyles = style({
  transform: 'rotate(180deg)',
})

export const closedStyles = style({
  transform: 'rotate(0deg)',
})
