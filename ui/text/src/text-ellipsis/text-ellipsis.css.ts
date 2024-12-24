import { style } from '@vanilla-extract/css'

export const baseEllipsisStyle = style({
  overflow: 'clip',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
})
