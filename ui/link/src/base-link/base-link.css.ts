import { style }         from '@vanilla-extract/css'
import { styleVariants } from '@vanilla-extract/css'

import { vars }          from '@ui/theme'

export const baseLink = style({
  textDecoration: 'none',
  cursor: 'pointer',
  transition: '0.35s',
})

export const linkVariants = styleVariants({
  active: {
    color: vars.colors.darkBlue,
    borderBottom: vars.colors.blue,
    paddingBottom: '8px',
  },
  default: {
    color: vars.colors.black,
    ':hover': {
      color: vars.colors.blue,
      backgroundColor: vars.colors.transparent,
      borderRadius: vars.radii.mini,
    },
  },
})
