import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const baseStyles = style({
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})
