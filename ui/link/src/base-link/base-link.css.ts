import { style }         from '@vanilla-extract/css'
import { styleVariants } from '@vanilla-extract/css'

import { vars }          from '@ui/theme'

export const baseLink = style({
  textDecoration: 'none',
  cursor: 'pointer',
  transition: '0.35s',
})

export const linkVariants = styleVariants({
  fill: {
    width: '100%',
    height: '100%',
  },
  active: {
    color: vars.colors.darkBlue,
    paddingBottom: '8px',
    borderBottom: '2px solid rgba(38, 89, 220, 1)',
  },
  default: {
    color: vars.colors.black,
  },
})
