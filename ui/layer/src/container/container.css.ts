import { style } from '@vanilla-extract/css'

export const baseStyles = style({
  width: '100%',
  height: '100vh',
  position: 'fixed',
  backgroundColor: 'red',
  display: 'flex',
  zIndex: 9999,
  overflowY: 'scroll',
})
